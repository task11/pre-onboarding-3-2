import React from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

import { requestLogin } from '../../../api/user';

import { UserInputProps } from '../../../types/user';

import { path } from '../../../utils/constants/common';
import { queryKeys } from '../../../utils/constants/queryKeys';

export default function useLogin(userInput: UserInputProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const getUser = async () => {
    const data = await requestLogin(userInput);
    queryClient.setQueryData(queryKeys.me, data);
    localStorage.setItem('token', data.accessToken);
    router.push(path.accounts);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUser();
  };

  return { handleSubmit };
}
