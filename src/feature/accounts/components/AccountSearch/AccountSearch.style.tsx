import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid white;
  background-color: white;
  padding: 3px;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 0px 5px;
  &:focus {
    outline: none;
  }
`;

export const StyledSearchButton = styled.button`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;
  fill: #7a7a7a;
  &:hover {
    fill: #292929;
  }
`;
