import React from 'react';
import './form-css/p-Form.scss'
import InputFormPicture from './FormPictures/InputFormPicture';

function FormPicture({ onImageChange }) {
  return (
    <div className='l-FormPicture'>
        <p>間取り:</p>
        <InputFormPicture name="MadoriPicture" onImageChange={onImageChange} />
        <p>外観:</p>
        <InputFormPicture name="GaikanPicture" onImageChange={onImageChange} />
        <p>内装:</p>
        <InputFormPicture name="NaisouPicture" onImageChange={onImageChange} />
        <p>マップ:</p>
        <InputFormPicture name="AccessPicture" onImageChange={onImageChange} />
    </div>
  );
}

export default FormPicture;