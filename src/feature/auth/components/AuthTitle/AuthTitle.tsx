import Icons from '../../../../components/Icons';
import { StyledAuthTitle } from './AuthTitle.style';

interface AuthTitleProps {
  title: string;
}

export default function AuthTitle({ title }: AuthTitleProps) {
  return (
    <StyledAuthTitle>
      <Icons.User />
      {title}
    </StyledAuthTitle>
  );
}
