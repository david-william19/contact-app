import styled from '@emotion/styled';
import { colors } from '../../../data/colors';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'outlined' | 'filled';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) => colors[props.color || 'primary']};
  border: none;
  padding: 15px 32px;
  height: fit-content;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: ${(props) => (props.color === 'primary' ? '#fff' : '#000')};
  border-radius: 5px;
`;

const Button = ({
  color = 'primary',
  variant = 'filled',
  onClick,
  type,
  children
}: ButtonProps) => {
  return (
    <ButtonContainer color={color} onClick={onClick} type={type} variant={variant}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
