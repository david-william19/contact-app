import styled from '@emotion/styled';

interface ModalProps {
  show?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Container = styled.div<ModalProps>`
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: display 0.5s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Modal = ({ show, children, style }: ModalProps) => {
  return (
    <Container style={style} show={show}>
      {children}
    </Container>
  );
};

export default Modal;
