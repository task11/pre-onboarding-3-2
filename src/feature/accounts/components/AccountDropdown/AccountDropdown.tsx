import { StyledDropdownWrapper } from './AccountDropdown.style';

import {
  accountActiveState,
  accountState,
  brokerList,
} from '../../../../utils/constants/dropdownList';

import Dropdown from '../../../../components/Dropdown/Dropdown';
import useDropdown from '../../../../utils/hooks/useDropdown';

export default function AccountDropdown() {
  const {
    isToggle: isBrokerToggle,
    selectedValue: brokerValue,
    handleToggle: handleBrokerToggle,
    onSelectValue: onSelectBrokerValue,
  } = useDropdown(brokerList[0].title);

  const {
    isToggle: isAccountStateToggle,
    selectedValue: acccountStateValue,
    handleToggle: handleAccountStateToggle,
    onSelectValue: onSelectAccountStateValue,
  } = useDropdown(accountState[0].title);

  const {
    isToggle: isAccountisActiveToggle,
    selectedValue: accountisActiveValue,
    handleToggle: handleAccountisActiveToggle,
    onSelectValue: onSelectAccountisActiveValue,
  } = useDropdown(accountActiveState[0].title);

  return (
    <StyledDropdownWrapper>
      <Dropdown
        items={brokerList}
        value={brokerValue}
        isToggle={isBrokerToggle}
        handleToggle={handleBrokerToggle}
        handleValue={onSelectBrokerValue}
      />
      <Dropdown
        items={accountState}
        value={acccountStateValue}
        isToggle={isAccountStateToggle}
        handleToggle={handleAccountStateToggle}
        handleValue={onSelectAccountStateValue}
      />
      <Dropdown
        items={accountActiveState}
        value={accountisActiveValue}
        isToggle={isAccountisActiveToggle}
        handleToggle={handleAccountisActiveToggle}
        handleValue={onSelectAccountisActiveValue}
      />
    </StyledDropdownWrapper>
  );
}
