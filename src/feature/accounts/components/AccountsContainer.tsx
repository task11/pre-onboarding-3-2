import useAccounts from '../hooks/useAccounts';

import {
  StyledAccountsContainer,
  StyledTableWrapper,
} from './AccountsContainer.style';

import AccountsPagenation from './AccountsPagenation/AccountsPagenation';
import AccountsTable from './AccountsTable/AccountsTable';
import AccountsTableBody from './AccountsTableBody/AccountsTableBody';
import AccountsTableHeader from './AccountsTableHeader/AccountsTableHeader';

export default function AccountsContainer() {
  const { data, isLoading, handlePageNext, handlePagePrev } = useAccounts();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <StyledAccountsContainer>
      <StyledTableWrapper>
        <AccountsPagenation
          handlePageNext={handlePageNext}
          handlePagePrev={handlePagePrev}
        />
        <AccountsTable>
          <AccountsTableHeader />
          <AccountsTableBody accounts={data} />
        </AccountsTable>
      </StyledTableWrapper>
    </StyledAccountsContainer>
  );
}
