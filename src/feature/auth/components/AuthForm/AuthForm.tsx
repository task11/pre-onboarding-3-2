import { StyledAuthForm } from './AuthForm.style';

interface AuthFromProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthForm({ children, onSubmit }: AuthFromProps) {
  return <StyledAuthForm onSubmit={onSubmit}>{children}</StyledAuthForm>;
}
