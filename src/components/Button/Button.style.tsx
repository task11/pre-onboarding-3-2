import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid #eeeeee;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:disabled {
    background-color: #eeeeee;
  }
`;
