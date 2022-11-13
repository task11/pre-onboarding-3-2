import React, { useMemo, useState } from 'react';

export default function useInputHandle() {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setUserInput((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const isValidated = useMemo(
    () => userInput.email !== '' && userInput.password !== '',
    [userInput.email, userInput.password],
  );
  return { userInput, handleInputChange, isValidated };
}
