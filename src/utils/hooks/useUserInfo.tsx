import { useQuery } from 'react-query';
import { fetchUser } from '../../api/user';
import { queryKeys } from '../constants/queryKeys';

export default function useUserInfo(userId: number) {
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
