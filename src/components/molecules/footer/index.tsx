import styled from "@emotion/styled";
import { colors } from "../../../data/colors";

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colors.secondary};
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: ${colors.platinum};
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
`

const Footer = () => {
    return (
        <Container>
            <p>created by davidwilliam</p>
        </Container>
    )
}

export default Footer;