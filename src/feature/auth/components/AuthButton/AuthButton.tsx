import { StyledAuthButtonWrapper } from './AuthButton.style';

import Button from '../../../../components/Button/Button';

interface AuthButtonProps {
  isValidated: boolean;
}

export default function AuthButton({ isValidated }: AuthButtonProps) {
  return (
    <StyledAuthButtonWrapper>
      <Button type="submit" disabled={!isValidated}>
        로그인
      </Button>
    </StyledAuthButtonWrapper>
  );
}
