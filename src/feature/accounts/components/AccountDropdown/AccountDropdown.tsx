import { StyledDropdownWrapper } from './AccountDropdown.style';

import {
  accountActiveState,
  accountState,
  brokerList,
} from '../../../../utils/constants/dropdownList';

import Dropdown from '../../../../components/Dropdown/Dropdown';

export default function AccountDropdown() {
  return (
    <StyledDropdownWrapper>
      <Dropdown items={brokerList} />
      <Dropdown items={accountState} />
      <Dropdown items={accountActiveState} />
    </StyledDropdownWrapper>
  );
}
