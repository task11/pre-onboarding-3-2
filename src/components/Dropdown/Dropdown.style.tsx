import styled from 'styled-components';

export const StyledDropdown = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.border.button};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;
