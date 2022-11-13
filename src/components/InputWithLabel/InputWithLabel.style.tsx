import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 1px solid #eeeeee;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
