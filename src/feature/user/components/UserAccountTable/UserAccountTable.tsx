import styled from 'styled-components';

import { AccountsResponseProps } from '../../../../types/accounts';

import UserAccountItem from '../UserAccountItem/UserAccountItem';

const StyledUserAccountTable = styled.table`
  width: 100%;
  border: 1px solid #e9e9e9;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  table-layout: fixed;

  th {
    border: 1px solid #e9e9e9;
    background-color: #cecece;
    vertical-align: middle;
    font-size: 16px;
    font-weight: 500;
  }

  tr {
    height: 40px;
  }

  td {
    font-size: 14px;
    word-break: break-all;
    vertical-align: middle;
    border: 1px solid #e9e9e9e9;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

interface UserAccountTableProps {
  accounts: AccountsResponseProps | null;
}

export default function UserAccountTable({ accounts }: UserAccountTableProps) {
  if (!accounts) return <div>Fail fetch</div>;

  return (
    <StyledWrapper>
      <StyledUserAccountTable>
        <thead>
          <tr>
            <th>브로커명</th>
            <th>계좌번호</th>
            <th>계좌상태</th>
            <th>계좌명</th>
            <th>평가금액</th>
            <th>입금금액</th>
            <th>계좌활성화여부</th>
            <th>계좌개설일</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, idx) => (
            <UserAccountItem key={idx} account={account} />
          ))}
        </tbody>
      </StyledUserAccountTable>
    </StyledWrapper>
  );
}
