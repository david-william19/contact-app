import styled from '@emotion/styled';
import { colors } from '../../../data/colors';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  color?: string | undefined;
  iconColor?: string | undefined;
}

type ButtonContainerProps = {
  color?: string | undefined;
  iconColor?: string | undefined;
};

const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.iconColor};
  border: none;
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  height: 40px;
  width: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary};
    transition: all 0.2s ease-in-out;
    color: ${colors.platinum};
  }
`;

const IconButton = ({ icon, onClick, color, iconColor, ...props }: IconButtonProps) => {
  return (
    <ButtonContainer
      aria-label="icon-button"
      onClick={onClick}
      iconColor={iconColor}
      color={color}
      {...props}
    >
      {icon}
    </ButtonContainer>
  );
};

export default IconButton;
