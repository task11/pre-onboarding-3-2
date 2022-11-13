import { axios } from '../lib/axios';

// import { UserInputProps, UserResponseProps } from '../types/user';

export async function fetchAccounts() {
  const { data } = await axios.post('/accounts');

  return data;
}
