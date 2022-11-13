import React from 'react';
import styled from 'styled-components';

import { ConvertAccountListProps } from '../../../../types/accounts';
import AccountItem from '../AccountItem/AccountItem';

interface AccountsTableBodyProps {
  accounts: ConvertAccountListProps;
}

const StyledNoData = styled.td`
  font-size: 24px;
  text-align: center;
`;

export default function AccountsTableBody({
  accounts,
}: AccountsTableBodyProps) {
  if (accounts.length === 0) {
    return (
      <tbody>
        <tr>
          <StyledNoData colSpan={9}>데이터가 없습니다.</StyledNoData>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {accounts.map((account, idx) => (
        <AccountItem key={idx} account={account} />
      ))}
    </tbody>
  );
}
