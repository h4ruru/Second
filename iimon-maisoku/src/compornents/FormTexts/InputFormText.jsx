import React from 'react';

function InputFormText({ name, value, onInputChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onInputChange(name, value); // 親コンポーネントに値を渡す
  };

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputFormText;
