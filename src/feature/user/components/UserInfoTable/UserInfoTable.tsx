import React from 'react';
import styled from 'styled-components';
import { UserFetchResponseProps } from '../../../../types/user';
import { convertDateToKr } from '../../../../utils/useful';

const StyledUserInfoTable = styled.table`
  width: 100%;
  height: 240px;
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

interface UserInfoTableProps {
  user: UserFetchResponseProps | null;
}

export default function UserInfoTable({ user }: UserInfoTableProps) {
  if (!user) {
    return <div>loading</div>;
  }
  return (
    <StyledWrapper>
      <StyledUserInfoTable border={1}>
        <tbody>
          <tr>
            <th>이름</th>
            <td>{user.name}</td>
            <th>성별</th>
            <td>{user.gender_origin}</td>
            <th>생년월일</th>
            <td>{convertDateToKr(user.birth_date)}</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              {user.address} {user.detail_address}
            </td>
            <th>이메일</th>
            <td>{user.email}</td>
            <th>핸드폰</th>
            <td>{user.phone_number}</td>
          </tr>
          <tr>
            <th>혜택 정보 수신</th>
            <td>data</td>
            <th>가입 경로</th>
            <td>data</td>
            <th>가입 시각</th>
            <td>data</td>
          </tr>
        </tbody>
      </StyledUserInfoTable>
    </StyledWrapper>
  );
}
