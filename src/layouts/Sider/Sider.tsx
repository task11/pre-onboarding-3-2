import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

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
import useUser from '../../utils/hooks/useUser';

export default function Sider() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user } = useUser();

  const isActive = (pathname: string): IsActiveProps => {
    return router.pathname === pathname ? 'active' : 'default';
  };

  const onLogout = () => {
    if (!window.confirm('정말 로그아웃 하시겠습니까?')) return;
    queryClient.clear();
    localStorage.removeItem('token');
    router.push(path.auth);
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
        <NavLink to={`${path.user}/${user?.id}`} isActive={isActive(path.user)}>
          <Icons.User />
          사용자
        </NavLink>
        <StyledNavItem onClick={onLogout}>
          <Icons.Logout />
          로그아웃
        </StyledNavItem>
      </StyledNav>
    </StyledSider>
  );
}
