import { useEffect, useRef, useState } from 'react';

export default function useDropdown(initialValue: string) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isToggle, setIsToggle] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleToggle = () => {
    setIsToggle((currentState) => !currentState);
  };

  const onSelectValue = (value: string) => {
    setSelectedValue(value);
    setIsToggle(false);
  };

  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      const target = e.target as HTMLElement;
      const isInDropDown = target.closest('.dropdown-container');

      if (!isInDropDown && isToggle) {
        setIsToggle(false);
      }
    };

    if (dropdownRef.current) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isToggle]);

  return { dropdownRef, isToggle, selectedValue, handleToggle, onSelectValue };
}
