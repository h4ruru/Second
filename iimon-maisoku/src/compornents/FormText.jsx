import './form-css/Form.scss';
import './form-css/p-Form.scss';
import React, { useState } from 'react';
import InputFormText from './FormTexts/InputFormText';

function FormText({ onValuesChange }) {
  const [inputValues, setInputValues] = useState({
    物件名: '',
    住所: '',
    面積: '',
    築年: '',
    階: '',
    賃料: '',
    敷金: '',
    礼金: '',
    駅より: ''
  });

  const handleInputChange = (name, value) => {
    const updatedValues = {
      ...inputValues,
      [name]: value
    };
    setInputValues(updatedValues);
    onValuesChange(updatedValues); // 親コンポーネントに変更を通知
  };

  return (
    <div className='l-FormText'>
      <p>物件名:</p>
      <InputFormText name="物件名" value={inputValues.物件名} onInputChange={handleInputChange} />
      <p>住所:</p>
      <InputFormText name="住所" value={inputValues.住所} onInputChange={handleInputChange} />
      <p>面積:</p>
      <InputFormText name="面積" value={inputValues.面積} onInputChange={handleInputChange} />
      <p>築年:</p>
      <InputFormText name="築年" value={inputValues.築年} onInputChange={handleInputChange} />
      <p>階:</p>
      <InputFormText name="階" value={inputValues.階} onInputChange={handleInputChange} />
      <p>賃料:</p>
      <InputFormText name="賃料" value={inputValues.賃料} onInputChange={handleInputChange} />
      <p>敷金:</p>
      <InputFormText name="敷金" value={inputValues.敷金} onInputChange={handleInputChange} />
      <p>礼金:</p>
      <InputFormText name="礼金" value={inputValues.礼金} onInputChange={handleInputChange} />
      <p>駅より:</p>
      <InputFormText name="駅より" value={inputValues.駅より} onInputChange={handleInputChange} />
    </div>
  );
}

export default FormText;
