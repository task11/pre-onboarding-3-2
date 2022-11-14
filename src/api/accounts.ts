import { axios } from '../lib/axios';

import { AccountsResponseProps } from '../types/accounts';

export async function fetchAccounts(
  query: string | string[],
  brokerId: number,
  status: number,
  isActive: number,
  page: string | string[],
) {
  const parseIsActive = isActive === 1 ? 'true' : 'false';
  const queryBroker = !!brokerId ? `&broker_id=${brokerId}` : '';
  const queryStatus = !!status ? `&status=${status}` : '';
  const queryIsActive = !!isActive ? `&is_active=${parseIsActive}` : '';

  const { data } = await axios.get<AccountsResponseProps>(
    `/accounts?q=${
      query + queryBroker + queryStatus + queryIsActive
    }&_page=${page}&_limit=20`,
  );

  return data;
}

export async function searchAccounts(query: string) {
  const { data } = await axios.get<AccountsResponseProps>(
    `/accounts?q=${query}&_page=1&_limit=20`,
  );

  return data;
}
