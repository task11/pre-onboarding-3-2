import {
  StyledHeader,
  StyledHeaderItems,
  StyledIconWrapper,
} from './Header.style';

import Avatar from '../../components/Avatar/Avatar';
import Icons from '../../components/Icons';
import useUser from '../../utils/hooks/useUser';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { user } = useUser();
  return (
    <StyledHeader>
      <StyledHeaderItems>
        <StyledIconWrapper>
          <Icons.SiderButton />
        </StyledIconWrapper>
        <h1>{title}</h1>
      </StyledHeaderItems>
      <StyledHeaderItems>
        <StyledIconWrapper>
          <Icons.Dot />
          <span>개발</span>
        </StyledIconWrapper>
        <StyledIconWrapper>
          <Icons.Question />
        </StyledIconWrapper>
        <StyledIconWrapper>
          <Icons.Bell />
        </StyledIconWrapper>
        <span>{user?.name}</span>
        <Avatar src="" />
      </StyledHeaderItems>
    </StyledHeader>
  );
}
