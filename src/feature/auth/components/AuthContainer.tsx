import React, { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

import { requestLogin } from '../../../api/user';
import { queryKeys } from '../../../utils/constants/queryKeys';
import { path } from '../../../utils/constants/common';

import { StyledAuthContainer } from './AuthContainer.style';

import Logo from '../../../components/Icons/Logo';
import AuthForm from './AuthForm/AuthForm';
import AuthInputs from './AuthInput/AuthInputs';
import AuthTitle from './AuthTitle/AuthTitle';
import AuthButton from './AuthButton/AuthButton';

export default function AuthContainer() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setUserInput((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const isValidated = useMemo(
    () => userInput.email !== '' && userInput.password !== '',
    [userInput.email, userInput.password],
  );

  const getUser = async () => {
    const data = await requestLogin(userInput);
    queryClient.setQueryData(queryKeys.user, data);
    router.push(path.accounts);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUser();
  };

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
