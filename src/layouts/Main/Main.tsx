import styled from 'styled-components';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sider from '../Sider/Sider';

interface MainProps {
  title: string;
  children: React.ReactNode;
}

const StyledMain = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 100vh;
  display: flex;
`;

const StyledSection = styled.section`
  width: calc(100% - 220px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function Main({ title, children }: MainProps) {
  return (
    <StyledMain>
      <Sider />
      <StyledSection>
        <Header title={title} />
        <Content>{children}</Content>
        <Footer />
      </StyledSection>
    </StyledMain>
  );
}
