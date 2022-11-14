import { useDispatch } from 'react-redux';

import {
  accountActiveStateList,
  accountStateList,
  brokerList,
} from '../../../../utils/constants/dropdownList';

import { StyledDropdownWrapper } from './AccountDropdown.style';

import Dropdown from '../../../../components/Dropdown/Dropdown';

import { Filter, FilterItem } from '../../../../types/filter';

import {
  setAccountActiveStateFilter,
  setAccountStateFilter,
  setBrokerFilter,
} from '../../../../store/filter';

interface AccountDropdownProps {
  filters: Filter;
}

export default function AccountDropdown({ filters }: AccountDropdownProps) {
  const { broker, accountState, accountActiveState } = filters;
  const dispatch = useDispatch();

  const dispatchBroker = (filter: FilterItem) =>
    dispatch(setBrokerFilter(filter));

  const dispatchAccountState = (filter: FilterItem) =>
    dispatch(setAccountStateFilter(filter));

  const dispatchAccountActiveState = (filter: FilterItem) =>
    dispatch(setAccountActiveStateFilter(filter));

  return (
    <StyledDropdownWrapper>
      <Dropdown list={brokerList} filter={broker} dispatcher={dispatchBroker} />
      <Dropdown
        list={accountStateList}
        filter={accountState}
        dispatcher={dispatchAccountState}
      />
      <Dropdown
        list={accountActiveStateList}
        filter={accountActiveState}
        dispatcher={dispatchAccountActiveState}
      />
    </StyledDropdownWrapper>
  );
}
