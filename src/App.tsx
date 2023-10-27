import './App.css'
import { gql, useQuery } from '@apollo/client'
import MainLayout from './components/layouts/main'
import ContactList from './components/molecules/contactList';
import Modal from './components/atom/modal';

function App() {
  const GET_CONTACT_LIST = gql`
  query GetContactList ($limit: Int, $offset: Int){
    contact(limit: $limit, offset: $offset){
        created_at
        first_name
        id
        last_name
        phones {
            number
        }
    }
}
`
  const { loading, error, data } = useQuery(GET_CONTACT_LIST, {
    variables: {
      limit: 10,
      offset: 0
    }
  });

  console.log(data)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>

  return (
    <MainLayout>
      <ContactList data={data.contact} />
      <Modal />
    </MainLayout>
  )
}

export default App
