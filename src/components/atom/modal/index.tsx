import styled from "@emotion/styled";
import IconButton from "../iconButton";

interface ModalProps {
    show?: boolean;
    setShow?: () => void;
    width?: string;
}

const Container = styled.div<ModalProps>`
    background-color: rgba(0,0,0,0.5);
    display: ${(props) => props.show ? 'block' : 'none'};
    transition: display 0.5s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const Wrapper = styled.div<ModalProps>`
    background-color: #ffffff;
    padding: 5px;
    border-radius: 10px;
    width: ${(props) => props.width};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Title = styled.h3`
    width: 100%;
    font-size: 26px;
    margin: 0;
    padding: 0;
`

const ModalHead = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Modal = ({show, width, setShow}: ModalProps) => {
    return (
        <Container show={show}>
            <Wrapper width={width}>
                <ModalHead>
                    <Title>tess</Title>
                    <IconButton onClick={setShow} icon={<span>X</span>} />
                </ModalHead>
            </Wrapper>
        </Container>
    )
}

export default Modal;