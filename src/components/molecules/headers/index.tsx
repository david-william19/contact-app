import styled from "@emotion/styled";
import { colors } from "../../../data/colors";
import Input from "../../atom/inputs";
import { MdAddCircle } from "react-icons/md";

const HeaderWrapper = styled.div`
    background-color: ${colors.primary};
    color: #ffffff;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    position: sticky;
`

const HeaderHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const HeaderTitle = styled.h3`
    margin: 0;
    padding: 0;
`

const HeaderButton = styled.button`
    background-color: ${colors.platinum};
    color: ${colors.secondary};
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderHead>
                <HeaderTitle>Phonebook</HeaderTitle>
                <HeaderButton>
                    <MdAddCircle size="1.2em" />
                        Add Contact
                </HeaderButton>
            </HeaderHead>
            <Input placeholder="type name or phone here..." type="text" />
        </HeaderWrapper>
    )
}

export default Header;