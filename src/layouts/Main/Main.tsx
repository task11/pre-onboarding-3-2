import styled from 'styled-components';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sider from '../Sider/Sider';

interface MainProps {
  children: React.ReactNode;
}

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export default function Main({ children }: MainProps) {
  return (
    <StyledMain>
      <Sider />
      <section>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </section>
    </StyledMain>
  );
}
