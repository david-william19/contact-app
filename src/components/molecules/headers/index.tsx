import styled from '@emotion/styled';
import { colors } from '../../../data/colors';
import Input from '../../atom/inputs';
import { AddCircle } from '@styled-icons/material';
import { useState } from 'react';
import Modal from '../../atom/modal';
import Button from '../../atom/button';
import HeaderModal from '../../atom/modal/header-modal';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { gql, useMutation } from '@apollo/client';
import { GET_CONTACT_LIST, POST_CONTACT } from '../../../services/Contact';
import { useContactContext } from '../../../contexts/Contact/ContactContext';

const HeaderWrapper = styled.div`
  background-color: ${colors.secondary};
  color: #ffffff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  position: sticky;
`;

const HeaderHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const HeaderButton = styled.button`
  background-color: ${colors.platinum};
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Box = styled.div`
  width: 90%;
  height: inherit;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${colors.secondary};

  h1 {
    color: ${colors.primary};
    font-size: 20px;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 10px 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    color: red;
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
`;

type SendDataContact = {
  first_name: string;
  last_name: string;
  phones: { number: string }[];
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const {searchContacts} = useContactContext();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phones: Yup.array().of(
      Yup.object().shape({
        number: Yup.string()
      })
    )
  });
  const onSubmitContact = (data: SendDataContact) => {
    AddContactWithPhones({
      variables: {
        first_name: data.first_name,
        last_name: data.last_name,
        phones: data.phones
      }
    });
    setOpen(false);
  };
  const [AddContactWithPhones, { error, loading }] = useMutation(POST_CONTACT, {
    refetchQueries: [GET_CONTACT_LIST]
  });
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <HeaderWrapper>
        <HeaderHead>
          <HeaderTitle>Phonebook</HeaderTitle>
          <HeaderButton onClick={() => setOpen(true)}>
            <AddCircle size="1.2em" />
            Add Contact
          </HeaderButton>
        </HeaderHead>
        <Input name={'search_query'} onChange={(e) => searchContacts(e.target.value)} placeholder="type name or phone here..." type="text" />
      </HeaderWrapper>
      <Modal show={open}>
        <Box>
          <HeaderModal title="Add new contact" onClick={() => setOpen(false)} />
          <form onSubmit={handleSubmit(onSubmitContact)}>
            <InputWrapper>
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Fill first name here..." type="text" />
                )}
              />
              {errors.first_name && <p>{errors.first_name.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Fill last name here..." type="text" />
                )}
              />
              {errors.last_name && <p>{errors.last_name.message}</p>}
            </InputWrapper>
            <hr />
            <h3>Phone number</h3>
            <InputWrapper>
              <Controller
                name="phones.0.number"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Fill phone number here..." type="text" />
                )}
              />
              {errors.phones && errors.phones[0]?.number && (
                <p>{errors.phones[0].number.message}</p>
              )}
            </InputWrapper>
            <InputWrapper>
              <Controller
                name="phones.1.number"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Fill optional phone number here..." type="text" />
                )}
              />
              {errors.phones && errors.phones[1]?.number && (
                <p>{errors.phones[1].number.message}</p>
              )}
            </InputWrapper>
            <Button color={'primary'} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
