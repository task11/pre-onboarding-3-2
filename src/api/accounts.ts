import { axios } from '../lib/axios';

import { AccountsResponseProps } from '../types/accounts';

export async function fetchAccounts(page: string | string[]) {
  const { data } = await axios.get<AccountsResponseProps>(
    `/accounts?_page=${page}&_limit=20`,
  );

  return data;
}
