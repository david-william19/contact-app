import styled from '@emotion/styled';
import Header from '../molecules/headers';
import Footer from '../molecules/footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
`;

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
