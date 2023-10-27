import { Contact } from "../../../types/contact";
import CardList from "../../atom/list";

interface ContactProps {
    data: [Contact];
}

const ContactList = ({data}: ContactProps) => {
    return (
        <div>
            {data.map((contact: Contact) => {
                return (
                    <CardList key={contact.id} {...contact} />
                )
            }
                )}
        </div>
    )
}

export default ContactList;