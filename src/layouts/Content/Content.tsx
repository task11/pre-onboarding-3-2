import styled from 'styled-components';

interface ContentProps {
  children: React.ReactNode;
}

const StyledContent = styled.section`
  width: 100%;
  height: calc(100vh - 112px);
  background-color: #e9e9e9;
  overflow-y: auto;
`;

export default function Content({ children }: ContentProps) {
  return <StyledContent>{children}</StyledContent>;
}
