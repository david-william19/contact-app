import './App.css';
import { ContactProvider } from './contexts/Contact';
import ListContact from './pages/list-contact';

function App() {
  return (
    <ContactProvider>
      <ListContact />
    </ContactProvider>
  );
}

export default App;

