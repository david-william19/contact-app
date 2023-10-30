import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FIND_CONTACT, GET_CONTACT_LIST } from "../../services/Contact";
import { Contact } from "../../types/contact";

interface ContactProps {
    children: React.ReactNode;
}

interface ContactContextType {
    contacts: Contact[];
    searchContacts: (searchTerm: string) => void;
    setOffset: (offset: number) => void;
    offset: number;
}

const ContactContext = createContext<ContactContextType>({
    contacts: [],
    searchContacts: () => {},
    setOffset: () => {},
    offset: 0,
});

export const useContactContext = () => useContext(ContactContext);

export const ContactProvider: React.FC<ContactProps> = ({ children }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [offset, setOffset] = useState(0);
    const { data } = useQuery(GET_CONTACT_LIST, {
        variables: {
            limit: 10,
            offset: offset,
            order_by: {
                created_at: "desc",
            },
        },
    });

    useEffect(() => {
        if (data) {
            setContacts(data.contact);
        }
    }, [data]);

    const searchContacts = (searchTerm: string) => {
        // Make a GraphQL query to search for contacts by the searchTerm variable
        const {data} = useQuery(FIND_CONTACT, {
            variables: {
                where: {
                    number: {
                        _ilike: `%${searchTerm}%`
                    }
                }
            }
        })
        // and update the contacts state with the results
        setContacts(data.contact);
    };

    return (
        <ContactContext.Provider value={{ contacts, searchContacts, offset, setOffset }}>
            {children}
        </ContactContext.Provider>
    );
};
