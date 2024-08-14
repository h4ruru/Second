import './form-css/FormText.scss'
import React, { useState } from 'react';
import InputFormText from './FormTexts/InputFormText';
import DisplayFormText from './FormTexts/DisplayFormText';

function Form() {
  const [inputValues, setInputValues] = useState({
    物件名: '',
    住所: '',
    面積: '',
    間取り: '',
    築年: '',
    階: '',
    賃料: '',
    敷金: '',
    礼金: '',
    駅から徒歩: '',
    種類: '',
  });

  const handleInputChange = (name, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className='l-FormText'>
      <p className='p-FormTextTop'>物件名:</p>
      <InputFormText name="物件名" onInputChange={handleInputChange} />

      <p>住所:</p>
      <InputFormText name="住所" onInputChange={handleInputChange} />

      <p>面積:</p>
      <InputFormText name="面積" onInputChange={handleInputChange} />
      
      <p>間取り:</p>
      <InputFormText name="間取り" onInputChange={handleInputChange} />
      
      <p>築年:</p>
      <InputFormText name="築年" onInputChange={handleInputChange} />
      
      <p>階:</p>
      <InputFormText name="階" onInputChange={handleInputChange} />
      
      <p>賃料:</p>
      <InputFormText name="賃料" onInputChange={handleInputChange} />
      
      <p>敷金:</p>
      <InputFormText name="敷金" onInputChange={handleInputChange} />
      
      <p>礼金:</p>
      <InputFormText name="礼金" onInputChange={handleInputChange} />
      
      <p>駅から徒歩:</p>
      <InputFormText name="駅から徒歩" onInputChange={handleInputChange} />
      
      <p>種類:</p>
      <InputFormText name="種類" onInputChange={handleInputChange} />

      <DisplayFormText values={inputValues} />
    </div>
  );
}

export default Form;

