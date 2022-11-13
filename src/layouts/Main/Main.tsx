import { StyledMain, StyledSection } from './Main.style';

import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sider from '../Sider/Sider';

interface MainProps {
  title: string;
  children: React.ReactNode;
}

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
