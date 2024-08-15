import React, { useState } from 'react';

function FormCheckbox({ onSelectionChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions(prevSelectedOptions => {
      const newSelectedOptions = prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter(option => option !== value)
        : [...prevSelectedOptions, value];

      onSelectionChange(newSelectedOptions); // 親コンポーネントに変更を通知
      return newSelectedOptions;
    });
  };

  return (
    <div className='l-FormCheckbox'>
      <label>
        <input 
          type="checkbox" 
          value="Option 1" 
          onChange={handleCheckboxChange} 
        />
        Option 1<br/>
      </label>
      <label>
        <input 
          type="checkbox" 
          value="Option 2" 
          onChange={handleCheckboxChange} 
        />
        Option 2<br/>
      </label>
      <label>
        <input 
          type="checkbox" 
          value="Option 3" 
          onChange={handleCheckboxChange} 
        />
        Option 3<br/>
      </label>
    </div>
  );
}

export default FormCheckbox;