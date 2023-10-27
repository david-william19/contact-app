import styled from "@emotion/styled";
import { colors } from "../../../data/colors";
import Input from "../../atom/inputs";

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
    background-color: ${colors.secondary};
    color: #ffffff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderHead>
                <HeaderTitle>Phonebook</HeaderTitle>
                <HeaderButton>Add</HeaderButton>
            </HeaderHead>
            <Input placeholder="type name or phone here..." type="text" />
        </HeaderWrapper>
    )
}

export default Header;