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

export async function fetchUser(userId: string | string[]) {
  const { data } = await axios.get<UserFetchResponseProps>(`/users/${userId}`);

  return data;
}

export async function fetchUserSetting(uuid: string) {
  const { data } = await axios.get(`/userSetting?uuid=${uuid}`);

  return data;
}
