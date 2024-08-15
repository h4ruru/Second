import React from 'react';

function FormCPrevew({ selectedOptions }) {
  return (
    <div className=''>
      <h4>CheckBox:</h4>
      <ul className='p-ChPrevew'>
        {selectedOptions.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormCPrevew;
