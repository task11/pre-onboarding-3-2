import styled from 'styled-components';

interface ContentProps {
  children: React.ReactNode;
}

const StyledContent = styled.section`
  width: 100%;
  height: calc(100% - 112px);
  background-color: #e9e9e9;
`;

export default function Content({ children }: ContentProps) {
  return <StyledContent>{children}</StyledContent>;
}
