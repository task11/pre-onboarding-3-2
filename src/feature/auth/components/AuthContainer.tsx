import { StyledAuthContainer } from './AuthContainer.style';

import Logo from '../../../components/Icons/Logo';
import AuthForm from './AuthForm/AuthForm';
import AuthInputs from './AuthInput/AuthInputs';
import AuthTitle from './AuthTitle/AuthTitle';
import AuthButton from './AuthButton/AuthButton';
import useInputHandle from '../hooks/useInputHandle';
import useLogin from '../hooks/useLogin';

export default function AuthContainer() {
  const { userInput, handleInputChange, isValidated } = useInputHandle();
  const { handleSubmit } = useLogin(userInput);

  return (
    <StyledAuthContainer>
      <Logo />
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle title="로그인" />
        <AuthInputs
          userInput={userInput}
          handleInputChange={handleInputChange}
        />
        <AuthButton isValidated={isValidated} />
      </AuthForm>
    </StyledAuthContainer>
  );
}
