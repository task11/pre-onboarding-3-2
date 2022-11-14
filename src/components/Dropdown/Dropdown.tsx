import useDropdown from '../../utils/hooks/useDropdown';

import {
  StyledButton,
  StyledDropdown,
  StyledNav,
  StyledSeletButton,
} from './Dropdown.style';

import Icons from '../Icons';
import { FilterItem } from '../../types/filter';

type Item = {
  id: number;
  title: string;
};

interface DropdownProps {
  list: Array<Item>;
  filter: FilterItem;
  dispatcher: (filter: FilterItem) => void;
}

export default function Dropdown({ list, filter, dispatcher }: DropdownProps) {
  const { dropdownRef, isToggle, selectedValue, handleToggle, onSelectValue } =
    useDropdown(filter.title);

  const handleFilterState = ({ id, title }: Item) => {
    onSelectValue(title);
    dispatcher({ id, title });
  };

  return (
    <StyledDropdown className="dropdown-container">
      <StyledButton onClick={handleToggle}>
        <span>{selectedValue}</span>
        <Icons.ArrowDown />
      </StyledButton>
      {isToggle && (
        <StyledNav ref={dropdownRef}>
          <ul>
            {list.map(({ id, title }) => (
              <li key={id}>
                <StyledSeletButton
                  onClick={() => handleFilterState({ id, title })}
                  disabled={selectedValue === title}
                >
                  {title}
                </StyledSeletButton>
              </li>
            ))}
          </ul>
        </StyledNav>
      )}
    </StyledDropdown>
  );
}
