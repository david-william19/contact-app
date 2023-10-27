import styled from "@emotion/styled";

interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const ButtonContainer = styled.button`
    background-color: #000;
    border: none;
    color: white;
    padding: 12px;
    font-size: 12px;
    border-radius: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`

const IconButton = ({ icon, onClick, ...props }: IconButtonProps) => {
    return (
        <ButtonContainer onClick={onClick} {...props}>
            {icon}
        </ButtonContainer>
    )
}

export default IconButton;