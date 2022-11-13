import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledHeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  padding: 0px 24px;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
