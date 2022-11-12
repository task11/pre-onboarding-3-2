import styled from 'styled-components';
import Main from '../src/layouts/Main/Main';

const StyledAccounts = styled.div`
  width: 100%;
  height: 100%;
`;

export default function accounts() {
  return (
    <Main title="투자계좌">
      <StyledAccounts>
        <div>하이</div>
      </StyledAccounts>
    </Main>
  );
}
