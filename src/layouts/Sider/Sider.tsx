import { useRouter } from 'next/router';
import { IsActiveProps } from '../../types/navLink';
import { path } from '../../utils/constants/common';

import {
  StyledLogo,
  StyledNav,
  StyledNavItem,
  StyledSider,
} from './Sider.style';

import Icons from '../../components/Icons';
import NavLink from '../../components/NavLink/NavLink';

export default function Sider() {
  const router = useRouter();
  const isActive = (pathname: string): IsActiveProps => {
    return router.pathname === pathname ? 'active' : 'default';
  };

  return (
    <StyledSider>
      <StyledNav>
        <StyledLogo>
          <Icons.Logo />
        </StyledLogo>
        <StyledNavItem>
          <Icons.Dashboard />
          대시보드
        </StyledNavItem>
        <NavLink to={path.accounts} isActive={isActive(path.accounts)}>
          <Icons.Account />
          계좌 목록
        </NavLink>
        <NavLink to={path.user} isActive={isActive(path.user)}>
          <Icons.User />
          사용자
        </NavLink>
        <StyledNavItem>
          <Icons.Logout />
          로그아웃
        </StyledNavItem>
      </StyledNav>
    </StyledSider>
  );
}
