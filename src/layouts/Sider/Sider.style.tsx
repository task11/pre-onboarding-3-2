import styled from 'styled-components';

export const StyledSider = styled.aside`
  display: flex;
  flex-direction: column;
  width: 220px;
  min-height: 100%;
  background-color: #121212;
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffff;
  font-size: 16px;
`;

export const StyledNavItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  color: #bcbcbc;
  width: 100%;
  height: 52px;
  padding-left: 16px;
  font-size: 18px;
  gap: 16px;
  cursor: pointer;

  svg {
    fill: #bcbcbc;
  }

  &:hover {
    color: #ffffff;
    background-color: #468ff7;

    svg {
      fill: white;
    }
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  width: 100%;
  height: 86px;
  align-items: center;
  justify-content: center;
`;
