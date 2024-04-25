// components/Keypad.js
import React, { useState } from 'react';

const Keypad = ({ onInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log('Entering password...');
    if (onInput) {
      onInput(event.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="keypadInput">Enter password:</label>
      <input
        type="password"
        id="keypadInput"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Keypad;
