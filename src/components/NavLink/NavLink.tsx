import { NavLinkProps } from '../../types/navLink';
import { StyledNavLink } from './NavLink.style';
import { VARIANTS } from './NavLink.variant';

export default function NavLink({
  to,
  isActive = 'default',
  children,
}: NavLinkProps) {
  const variant = VARIANTS[isActive];

  return (
    <StyledNavLink href={to} variant={variant}>
      {children}
    </StyledNavLink>
  );
}
