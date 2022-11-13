import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.thead`
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  background-color: #cecece;

  th {
    vertical-align: middle;
    border: 1px solid #e9e9e9e9;
  }
`;

export default function AccountsTableHeader() {
  return (
    <StyledTableHeader>
      <tr>
        <th>고객명</th>
        <th>브로커명</th>
        <th>계좌번호</th>
        <th>계좌상태</th>
        <th>계좌명</th>
        <th>평가금액</th>
        <th>입금금액</th>
        <th>계좌활성화여부</th>
        <th>계좌개설일</th>
      </tr>
    </StyledTableHeader>
  );
}
