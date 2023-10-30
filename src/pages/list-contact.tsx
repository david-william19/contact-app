import { useQuery } from '@apollo/client';
import MainLayout from '../components/layouts/main';
import ContactList from '../components/molecules/contactList';
import { useState } from 'react';
import Pagination from '../components/atom/Pagination';
import { GET_CONTACT_LIST } from '../services/Contact';
import styled from "@emotion/styled";

function ListContactPage() {
  const [pageNumber, setPageNumber] = useState(10);
  const { loading, data } = useQuery(GET_CONTACT_LIST, {
    variables: {
      limit: 10,
      offset: pageNumber,
      order_by: {
        created_at: 'asc',
      },
    }
  });

  const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
  `

  return (
    <MainLayout>
        <ContactWrapper>
        {data?.contact.length > 0 ? (
        <ContactList data={data?.contact} loading={loading} />
      ) : (
        <h1>No data</h1>
      )}
      <Pagination
        length={data?.contact.length}
        currentPage={pageNumber}
        totalPages={0}
        onPageChange={(number) => setPageNumber(number)}
        />
        </ContactWrapper>
    </MainLayout>
  );
}

export default ListContactPage;
