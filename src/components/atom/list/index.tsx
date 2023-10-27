import styled from "@emotion/styled"
import { Contact } from "../../../types/contact"
import { colors } from "../../../data/colors"
import IconButton from "../iconButton"
import {MdMoreVert} from "react-icons/md"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 0.1px solid ${colors.primary};
    border-width: thin;
    width: 100%;
    padding: 10px;
`

const PhonesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;

    span {
        padding: 5px;
        border: 0.1px solid ${colors.primary};
        border-radius: 5px;
    }
`

const Title = styled.h3`
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 0;
    color: ${colors.primary};
`

const CardList = (contact: Contact) => {
    return (
        <Wrapper>
            <Title>{contact.first_name} {contact.last_name}</Title>
            <PhonesWrapper>
                {contact.phones.map((phone, index) => {
                            return  <span key={index}>{phone.number}</span>
                        })}
            </PhonesWrapper>

            <IconButton icon={<MdMoreVert />} />
        </Wrapper>
    )
}

export default CardList