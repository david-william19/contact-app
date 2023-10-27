import styled from "@emotion/styled";
import { colors } from "../../../data/colors";

interface ButtonProps {
    color: keyof typeof colors | string;
    variant?: 'outlined' | 'filled';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const ButtonContainer = styled.button<ButtonProps>`
    background-color: ${(props) => colors[props.color]};
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`;

const Button = ({color = 'primary', variant = 'filled', onClick, type}: ButtonProps) => {
    return <ButtonContainer color={color.toString()} onClick={onClick} type={type} variant={variant}>{variant === 'outlined' ? 'Outlined' : 'Filled'} Button</ButtonContainer>;
};

export default Button;