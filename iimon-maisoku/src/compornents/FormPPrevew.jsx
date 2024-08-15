import React from 'react';
import DisplayFormPicture from './FormPictures/DisplayFormPicture';

function FormPPrevew({ images }) {
  return (
    <div>
        <h3>Pictures:</h3>
        <p>間取り:</p>
        {images.MadoriPicture && <DisplayFormPicture image={images.MadoriPicture} label="Madori Picture" />}
        <p>外観:</p>
        {images.GaikanPicture && <DisplayFormPicture image={images.GaikanPicture} label="Gaikan Picture" />}
        <p>内装:</p>
        {images.NaisouPicture && <DisplayFormPicture image={images.NaisouPicture} label="Naisou Picture" />}
        <p>マップ:</p>
        {images.AccessPicture && <DisplayFormPicture image={images.AccessPicture} label="Access Picture" />}
    </div>
  );
}

export default FormPPrevew;