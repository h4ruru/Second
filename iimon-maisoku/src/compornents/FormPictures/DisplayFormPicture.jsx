import React from 'react';

function DisplayFormPicture({ image, label }) {
  const imageUrl = URL.createObjectURL(image);

  return (
    <div>
      <h2>{label}:</h2>
      <img src={imageUrl} alt={label} />
    </div>
  );
}

export default DisplayFormPicture;
