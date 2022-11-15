import { StyledUserContainer } from './UserContainer.style';

import UserAccountTable from './UserAccountTable/UserAccountTable';
import UserHeader from './UserHeader/UserHeader';
import UserInfoTable from './UserInfoTable/UserInfoTable';

export default function UserContainer() {
  return (
    <StyledUserContainer>
      <UserHeader />
      <UserInfoTable />
      <UserAccountTable />
    </StyledUserContainer>
  );
}
