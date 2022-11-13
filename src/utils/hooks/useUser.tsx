import { useQueryClient } from 'react-query';
import { UserResponseProps } from '../../types/user';
import { queryKeys } from '../constants/queryKeys';

export default function useUser() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<UserResponseProps>(queryKeys.user);

  return { accessToken: data?.accessToken, user: data?.user };
}
