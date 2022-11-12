import styled from 'styled-components';
import Link from 'next/link';
import { StyledNavLinkProps } from '../../types/navLink';

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  ${(props) => props.variant}
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  color: var(--link-color, #bcbcbc);
  background-color: var(--link-bg-color, #121212);
  height: 52px;
  font-size: 18px;
  padding-left: 16px;
  cursor: pointer;

  svg {
    fill: var(--link-color, #bcbcbc);
  }

  &:visited {
    color: var(--link-color, #bcbcbc);
  }

  &:hover {
    color: #ffffff;
    background-color: #468ff7;

    svg {
      fill: white;
    }
  }
`;
