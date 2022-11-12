import { CSSProp } from 'styled-components';

export type IsActiveProps = 'active' | 'default';

export interface NavLinkProps {
  to: string;
  isActive?: IsActiveProps;
  children: React.ReactNode;
}

export interface StyledNavLinkProps {
  variant: CSSProp;
}
