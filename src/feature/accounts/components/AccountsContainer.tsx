import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchAccounts } from '../../../api/accounts';
import {
  AccountsResponseProps,
  ConvertAccountListProps,
} from '../../../types/accounts';
import { queryKeys } from '../../../utils/constants/queryKeys';
import {
  addCommas,
  convertAccountState,
  convertBroker,
  convertDateToKr,
  maskingName,
} from '../../../utils/useful';

import {
  StyledAccountsContainer,
  StyledTableWrapper,
} from './AccountsContainer.style';
import AccountsPagenation from './AccountsPagenation/AccountsPagenation';
import AccountsTable from './AccountsTable/AccountsTable';
import AccountsTableBody from './AccountsTableBody/AccountsTableBody';
import AccountsTableHeader from './AccountsTableHeader/AccountsTableHeader';

export default function AccountsContainer() {
  const router = useRouter();
  const { page = '1' } = router.query;

  const { data = [], isLoading } = useQuery(
    [queryKeys.accounts, { page }],
    () => fetchAccounts(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    },
  );

  const handlePageNext = () => {
    if (Number.isNaN(Number(page)) || data.length === 0) return;
    router.push(`/account?page=${Number(page) + 1}`);
  };

  const handlePagePrev = () => {
    if (Number.isNaN(Number(page)) || page === '1') return;
    router.push(`/account?page=${Number(page) + -1}`);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const convertData = (
    targetData: AccountsResponseProps,
  ): ConvertAccountListProps => {
    if (!targetData) return [];

    return targetData.map(
      ({
        assets,
        broker_id,
        created_at,
        is_active,
        name,
        number,
        payments,
        status,
        user_id,
      }) => ({
        assets: addCommas(assets),
        broker: convertBroker(broker_id),
        created_at: convertDateToKr(created_at),
        is_active,
        name,
        number: maskingName(number),
        payments: addCommas(payments),
        status: convertAccountState(status),
        user_id,
      }),
    );
  };

  return (
    <StyledAccountsContainer>
      <StyledTableWrapper>
        <AccountsPagenation
          handlePageNext={handlePageNext}
          handlePagePrev={handlePagePrev}
        />
        <AccountsTable>
          <AccountsTableHeader />
          <AccountsTableBody accounts={convertData(data)} />
        </AccountsTable>
      </StyledTableWrapper>
    </StyledAccountsContainer>
  );
}
