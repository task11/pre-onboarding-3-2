import styled from 'styled-components';

interface AuthProps {
  children: React.ReactNode;
}

const StyledAuth = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  background-color: #e9e9e9;
`;

export default function Auth({ children }: AuthProps) {
  return <StyledAuth>{children}</StyledAuth>;
}
