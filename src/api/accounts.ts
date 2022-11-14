import { axios } from '../lib/axios';

import { AccountsResponseProps } from '../types/accounts';

export async function fetchAccounts(
  query: string | string[],
  page: string | string[],
) {
  const { data } = await axios.get<AccountsResponseProps>(
    `/accounts?q=${query}&_page=${page}&_limit=20`,
  );

  return data;
}

export async function searchAccounts(query: string) {
  const { data } = await axios.get<AccountsResponseProps>(
    `/accounts?q=${query}&_page=1&_limit=20`,
  );

  return data;
}
