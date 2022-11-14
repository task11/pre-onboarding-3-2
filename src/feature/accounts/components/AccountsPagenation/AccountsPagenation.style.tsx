import styled from 'styled-components';

export const StyledPagenation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in;
    fill: #7a7a7a;
    &:hover {
      fill: #292929;
    }
  }
  span {
    width: 50px;
    font-size: 12px;
    font-weight: 700;
  }
`;
