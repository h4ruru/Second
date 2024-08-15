import React from 'react';

function InputFormPicture({ onImageChange, name }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageChange(name, file);
    }
  };

  return (
    <form>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        name={name}
      />
    </form>
  );
}

export default InputFormPicture;
