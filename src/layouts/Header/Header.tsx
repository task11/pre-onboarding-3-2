import {
  StyledHeader,
  StyledHeaderItems,
  StyledIconWrapper,
} from './Header.style';

import Avatar from '../../components/Avatar/Avatar';
import Icons from '../../components/Icons';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const userProfile = '';

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
        <Avatar src={userProfile} />
      </StyledHeaderItems>
    </StyledHeader>
  );
}
