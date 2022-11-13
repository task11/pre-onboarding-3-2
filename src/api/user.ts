import { axios } from '../lib/axios';

import {
  UserFetchResponseProps,
  UserInputProps,
  UserResponseProps,
} from '../types/user';

export async function requestLogin(body: UserInputProps) {
  const { data } = await axios.post<UserResponseProps>('/login', body);

  return data;
}

export async function fetchUser(userId: number) {
  const { data } = await axios.get<UserFetchResponseProps>(`/users/${userId}`);

  return data;
}
