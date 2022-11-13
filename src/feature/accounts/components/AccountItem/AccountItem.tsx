import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchUser } from '../../../../api/user';
import { ConvertAccountProps } from '../../../../types/accounts';
import { queryKeys } from '../../../../utils/constants/queryKeys';

interface AccountItemProps {
  account: ConvertAccountProps;
}

const StyledTableRow = styled.tr`
  height: 30px;

  td {
    font-size: 14px;
    word-break: break-all;
  }
`;

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
      <td>{account.broker}</td>
      <td>{account.number}</td>
      <td>{account.status}</td>
      <td>{account.name}</td>
      <td>{account.assets}</td>
      <td>{account.payments}</td>
      <td>{account.is_active ? '활성화' : '비활성화'}</td>
      <td>{account.created_at}</td>
    </StyledTableRow>
  );
}
