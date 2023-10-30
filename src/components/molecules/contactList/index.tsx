import { Contact } from '../../../types/contact';
import CardList from '../../atom/list';
import Lottie from 'lottie-react';
import LoadAnimation from '../../../assets/animation/load-animation.json';
import styled from '@emotion/styled';

interface ContactProps {
  data: [Contact];
  loading: boolean;
}

const LottieWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 60%;
        margin: 0 auto;
    }
`

const ContactList = ({ data, loading }: ContactProps) => {
  if (loading) {
    return (
      <LottieWrapper>
        <Lottie animationData={LoadAnimation} loop={true} />
      </LottieWrapper>
    );
  }

  return (
    <Container>
      {data.map((contact: Contact) => {
        return <CardList key={contact.id} {...contact} />;
      })}
    </Container>
  );
};

export default ContactList;
