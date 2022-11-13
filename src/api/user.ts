import { axios } from '../lib/axios';

import { UserInputProps, UserResponseProps } from '../types/user';

export async function requestLogin(body: UserInputProps) {
  const { data } = await axios.post<UserResponseProps>('/login', body);

  return data;
}
