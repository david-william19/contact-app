import styled from '@emotion/styled';
import IconButton from '../iconButton';
import { Close } from '@styled-icons/material';

interface HeaderModalProps {
  onClick?: () => void;
  title: string;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  flex-wrap: wrap;
  width: 100%;
`;

const HeaderModal = ({ onClick, title }: HeaderModalProps) => {
  return (
    <Header>
      <h1>{title}</h1>
      <IconButton onClick={onClick} icon={<Close />} />
    </Header>
  );
};

export default HeaderModal;
