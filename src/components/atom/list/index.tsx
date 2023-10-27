import styled from "@emotion/styled"
import { Contact } from "../../../types/contact"
import { colors } from "../../../data/colors"

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
`

const Title = styled.h3`
    width: 100%;
    font-size: 16px;
    margin: 0;
    padding: 0;
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
        </Wrapper>
    )
}

export default CardList