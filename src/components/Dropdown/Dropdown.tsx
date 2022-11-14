import React, { forwardRef } from 'react';
import { StyledDropdown } from './Dropdown.style';

interface DropdownProps {
  items?: Array<string>;
  children: React.ReactNode;
}

export default forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(
  { children, items },
  ref,
) {
  console.log(items);

  return <StyledDropdown ref={ref}>{children}</StyledDropdown>;
});
