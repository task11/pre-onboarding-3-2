import React, { useState } from 'react';

export default function useDropdown(initialValue: string) {
  const [isToggle, setisToggle] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleToggle = () => {
    setisToggle((currentState) => !currentState);
  };

  const onSelectValue = (value: string) => {
    setSelectedValue(value);
    setisToggle(false);
  };

  return { isToggle, selectedValue, handleToggle, onSelectValue };
}
