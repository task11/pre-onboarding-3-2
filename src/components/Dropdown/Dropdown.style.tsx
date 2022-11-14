import styled from 'styled-components';

export const StyledDropdown = styled.section`
  position: relative;
  padding: 3px;
  background-color: white;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  width: 135px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledNav = styled.nav`
  width: 100%;
  position: absolute;
  top: 35px;
  max-height: 240px;
  overflow-y: auto;

  border-radius: 10px;
  background-color: white;
  border: 1px solid #e9e9e9e9;
  z-index: 2;

  li {
    padding: 5px;
    border-bottom: 1px solid #e9e9e9e9;
  }
`;

export const StyledSeletButton = styled.button`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;
