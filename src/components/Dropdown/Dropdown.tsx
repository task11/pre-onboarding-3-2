import useDropdown from '../../utils/hooks/useDropdown';

import {
  StyledButton,
  StyledDropdown,
  StyledNav,
  StyledSeletButton,
} from './Dropdown.style';

import Icons from '../Icons';

type Item = {
  id: number;
  title: string;
};

interface DropdownProps {
  items: Array<Item>;
}

export default function Dropdown({ items }: DropdownProps) {
  const { dropdownRef, isToggle, selectedValue, handleToggle, onSelectValue } =
    useDropdown(items[0].title);

  return (
    <StyledDropdown className="dropdown-container">
      <StyledButton onClick={handleToggle}>
        <span>{selectedValue}</span>
        <Icons.ArrowDown />
      </StyledButton>
      {isToggle && (
        <StyledNav ref={dropdownRef}>
          <ul>
            {items.map(({ id, title }) => (
              <li key={id}>
                <StyledSeletButton
                  onClick={() => onSelectValue(title)}
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
