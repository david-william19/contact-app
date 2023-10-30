import styled from '@emotion/styled';
import { Contact } from '../../../types/contact';
import { colors } from '../../../data/colors';
import IconButton from '../iconButton';
import { Delete, Edit } from '@styled-icons/material';
import Modal from '../modal';
import { useState } from 'react';
import HeaderModal from '../modal/header-modal';
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT, GET_CONTACT_LIST } from '../../../services/Contact';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1px solid ${colors.platinum};
  border-width: thin;
  padding: 10px 30px;
  width: 100%;
`;

const PhonesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  span {
    padding: 5px;
    border: 0.1px solid ${colors.primary};
    border-radius: 5px;
  }
`;

const Box = styled.div`
  width: inherit;
  height: inherit;
  background-color: ${colors.platinum};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Title = styled.h3`
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0;
  color: ${colors.primary};
`;

const CardList = (contact: Contact) => {
  const [show, setShow] = useState(false);

  const [deleteContact, { loading }] = useMutation(DELETE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACT_LIST }]
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Modal show={show}>
        <Box>
          <HeaderModal title="Test" onClick={() => setShow(!show)} />
        </Box>
      </Modal>
      <Wrapper>
        <div>
          <Title>
            {contact.first_name} {contact.last_name}
          </Title>
          <PhonesWrapper>
            <span>{contact.phones[0].number}</span>
          </PhonesWrapper>
        </div>

        <ActionWrapper>
          <IconButton
            onClick={() => setShow(!show)}
            color={colors.warning}
            icon={<Edit size={'1.2em'} />}
          />
          <IconButton
            onClick={() =>
              deleteContact({
                variables: {
                  id: contact.id
                }
              })
            }
            iconColor="white"
            color={colors.error}
            icon={<Delete size={'1.2em'} />}
          />
        </ActionWrapper>
      </Wrapper>
    </>
  );
};

export default CardList;
