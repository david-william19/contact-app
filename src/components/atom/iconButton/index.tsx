import styled from "@emotion/styled";

interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    color?: string | undefined;
}

const ButtonContainer = styled.button`
    color: ${props => props.color};
    border: none;
    color: white;
    padding: 12px;
    font-size: 12px;
    border-radius: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`

const IconButton = ({ icon, onClick, color, ...props }: IconButtonProps) => {
    return (
        <ButtonContainer onClick={onClick} color={color} {...props}>
            {icon}
        </ButtonContainer>
    )
}

export default IconButton;