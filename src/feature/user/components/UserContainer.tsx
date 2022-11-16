import { useEffect } from 'react';
import { useQueries } from 'react-query';

import { fetchUserAccount } from '../../../api/accounts';
import { fetchUser, fetchUserSetting } from '../../../api/user';
import { queryKeys } from '../../../utils/constants/queryKeys';

import { StyledUserContainer, StyledUserHeader } from './UserContainer.style';

import UserAccountTable from './UserAccountTable/UserAccountTable';
import UserInfoTable from './UserInfoTable/UserInfoTable';

import Main from '../../../layouts/Main/Main';

interface UserContainerProps {
  userId: string | string[];
}

export default function UserContainer({ userId }: UserContainerProps) {
  const [{ data: user = null, isLoading }, { data: accounts = null }] =
    useQueries([
      {
        queryKey: [queryKeys.user, { userId }],
        queryFn: () => fetchUser(userId),
      },
      {
        queryKey: [queryKeys.accounts, { userId }],
        queryFn: () => fetchUserAccount(userId),
      },
    ]);

  if (isLoading) {
    <div>loading</div>;
  }

  useEffect(() => {
    if (user) {
      const fn = async () => {
        await fetchUserSetting(user.uuid);
      };
      fn();
    }
  }, [user]);

  return (
    <Main title={`${user?.name} 님의 계좌목록`}>
      <StyledUserContainer>
        <StyledUserHeader>사용자 정보</StyledUserHeader>
        <UserInfoTable user={user} />
        <StyledUserHeader>사용자 계좌목록</StyledUserHeader>
        <UserAccountTable accounts={accounts} />
      </StyledUserContainer>
    </Main>
  );
}
