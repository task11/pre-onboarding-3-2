import { StyledButton } from './Button.style';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  type,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
