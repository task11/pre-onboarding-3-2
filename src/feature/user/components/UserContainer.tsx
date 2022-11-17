import { StyledUserContainer, StyledUserHeader } from './UserContainer.style';

import UserAccountTable from './UserAccountTable/UserAccountTable';
import UserInfoTable from './UserInfoTable/UserInfoTable';

import Main from '../../../layouts/Main/Main';
import useUserInfo from '../hooks/useUserInfo';

interface UserContainerProps {
  userId: string | string[];
}

export default function UserContainer({ userId }: UserContainerProps) {
  const { user, accounts, isLoading } = useUserInfo({ userId });

  if (isLoading) {
    <div>loading</div>;
  }

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
