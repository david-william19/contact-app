import MainLayout from '../components/layouts/main';
import ContactList from '../components/molecules/contactList';
import Pagination from '../components/atom/Pagination';
import styled from "@emotion/styled";
import { useContactContext } from '../contexts/Contact/ContactProvider';

function ListContactPage() {
  const {contacts, loading, offset, setOffset} = useContactContext();

  const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
  `

  return (
    <MainLayout>
        <ContactWrapper>
        {contacts?.length > 0 ? (
        <ContactList loading={loading} data={contacts} />
      ) : (
        <h1>No data</h1>
      )}
      <Pagination
        length={contacts.length}
        currentPage={offset}
        totalPages={0}
        onPageChange={(number) => setOffset(number)}
        />
        </ContactWrapper>
    </MainLayout>
  );
}

export default ListContactPage;
