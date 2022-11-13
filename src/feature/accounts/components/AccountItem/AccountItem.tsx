import { useQuery } from 'react-query';
import { fetchUser } from '../../../../api/user';
import { AccountProps } from '../../../../types/accounts';
import { queryKeys } from '../../../../utils/constants/queryKeys';

import {
  addCommas,
  checkActive,
  convertAccountState,
  convertBroker,
  convertDateToKr,
  maskingName,
} from '../../../../utils/useful';

import { StyledTableRow } from './AccountItem.style';

interface AccountItemProps {
  account: AccountProps;
}

export default function AccountItem({ account }: AccountItemProps) {
  const { data, isLoading } = useQuery(
    [queryKeys.user, { userId: account.user_id }],
    () => fetchUser(account.user_id),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    },
  );

  if (isLoading) {
    return (
      <StyledTableRow>
        <td>로딩중..</td>
      </StyledTableRow>
    );
  }

  return (
    <StyledTableRow>
      <td>{data?.name}</td>
      <td>{convertBroker(account.broker_id)}</td>
      <td>{maskingName(account.number)}</td>
      <td>{convertAccountState(account.status)}</td>
      <td>{account.name}</td>
      <td>{addCommas(account.assets)}</td>
      <td>{addCommas(account.payments)}</td>
      <td>{checkActive(account.is_active)}</td>
      <td>{convertDateToKr(account.created_at)}</td>
    </StyledTableRow>
  );
}
