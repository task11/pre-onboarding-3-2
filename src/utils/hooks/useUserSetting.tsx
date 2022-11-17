import { useQuery } from 'react-query';
import { fetchUser } from '../../api/user';
import { queryKeys } from '../constants/queryKeys';

export default function useUserSetting(userId: string | string[]) {
  const { data, isLoading } = useQuery(
    [queryKeys.user, { userId }],
    () => fetchUser(userId),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    },
  );
  return { data, isLoading };
}
