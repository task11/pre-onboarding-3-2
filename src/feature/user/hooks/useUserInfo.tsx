import { useQueries } from 'react-query';
import { fetchUserAccount } from '../../../api/accounts';
import { fetchUser } from '../../../api/user';
import { queryKeys } from '../../../utils/constants/queryKeys';

interface UseUserInfoProps {
  userId: string | string[];
}

export default function useUserInfo({ userId }: UseUserInfoProps) {
  const [
    { data: user = null, isLoading: isUserLoading },
    { data: accounts = null, isLoading: isAccountsLoading },
  ] = useQueries([
    {
      queryKey: [queryKeys.user, { userId }],
      queryFn: () => fetchUser(userId),
    },
    {
      queryKey: [queryKeys.accounts, { userId }],
      queryFn: () => fetchUserAccount(userId),
    },
  ]);
  const isLoading = isUserLoading || isAccountsLoading;

  return { user, accounts, isLoading };
}
