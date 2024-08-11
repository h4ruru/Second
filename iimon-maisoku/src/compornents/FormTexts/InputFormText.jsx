import React, { useState } from 'react';

function InputFormText({ onInputChange, name }) {
  const handleChange = (event) => {
    onInputChange(name, event.target.value);
  };

  return (
    <input
      type="text"
      name={name}
      onChange={handleChange}
    />
  );
}

export default InputFormText;
