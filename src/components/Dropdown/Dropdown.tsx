import React, { forwardRef } from 'react';
import Icons from '../Icons';
import {
  StyledButton,
  StyledDropdown,
  StyledNav,
  StyledSeletButton,
} from './Dropdown.style';

type Item = {
  id: number;
  title: string;
};

interface DropdownProps {
  items: Array<Item>;
  value: string;
  isToggle: boolean;
  handleToggle: () => void;
  handleValue: (value: string) => void;
}

export default forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(
  { items, isToggle, value, handleToggle, handleValue },
  ref,
) {
  return (
    <StyledDropdown>
      <StyledButton onClick={handleToggle}>
        <span>{value}</span>
        <Icons.ArrowDown />
      </StyledButton>
      {isToggle && (
        <StyledNav ref={ref}>
          <ul>
            {items.map(({ id, title }) => (
              <li key={id}>
                <StyledSeletButton onClick={() => handleValue(title)}>
                  {title}
                </StyledSeletButton>
              </li>
            ))}
          </ul>
        </StyledNav>
      )}
    </StyledDropdown>
  );
});
