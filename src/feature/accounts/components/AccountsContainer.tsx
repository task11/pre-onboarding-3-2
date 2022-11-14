import useAccounts from '../hooks/useAccounts';

import {
  StyledAccountsContainer,
  StyledFiltersWrapper,
  StyledTableWrapper,
} from './AccountsContainer.style';

import AccountDropdown from './AccountDropdown/AccountDropdown';
import AccountSearch from './AccountSearch/AccountSearch';
import AccountsTable from './AccountsTable/AccountsTable';
import AccountsTableHeader from './AccountsTableHeader/AccountsTableHeader';
import AccountsTableBody from './AccountsTableBody/AccountsTableBody';
import AccountsPagenation from './AccountsPagenation/AccountsPagenation';

export default function AccountsContainer() {
  const {
    data,
    isLoading,
    page,
    searchQuery,
    handleInputChange,
    submitSearch,
    handlePageNext,
    handlePagePrev,
  } = useAccounts();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <StyledAccountsContainer>
      <StyledFiltersWrapper>
        <AccountDropdown />
        <AccountSearch
          value={searchQuery}
          handleChange={handleInputChange}
          submitSearch={submitSearch}
        />
      </StyledFiltersWrapper>
      <StyledTableWrapper>
        <AccountsTable>
          <AccountsTableHeader />
          <AccountsTableBody accounts={data} />
        </AccountsTable>
        <AccountsPagenation
          handlePageNext={handlePageNext}
          handlePagePrev={handlePagePrev}
          page={page}
        />
      </StyledTableWrapper>
    </StyledAccountsContainer>
  );
}
