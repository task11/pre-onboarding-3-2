import React from 'react';
import styled from 'styled-components';

const StyledUserHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;
`;

export default function UserHeader() {
  return <StyledUserHeader>사용자 정보</StyledUserHeader>;
}
