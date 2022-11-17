import Main from '../src/layouts/Main/Main';

import UserListContainer from '../src/feature/userList/components/UserListContainer';

export default function User() {
  return (
    <Main title="사용자 목록">
      <UserListContainer />
    </Main>
  );
}
