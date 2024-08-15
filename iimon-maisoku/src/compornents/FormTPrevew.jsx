// DisplayData.js
import React from 'react';
import './form-css/Form.scss';
import './form-css/p-Form.scss';

function FormTPrevew({ values }) {
  return (
    <div>
      <p>物件名: {values.物件名}</p>
      <p>住所: {values.住所}</p>
      <p>面積: {values.面積}</p>
      <p>築年: {values.築年}</p>
      <p>階: {values.階}</p>
      <p>賃料: {values.賃料}</p>
      <p>敷金: {values.敷金}</p>
      <p>礼金: {values.礼金}</p>
      <p>駅より: {values.駅より}</p>
    </div>
  );
}

export default FormTPrevew;
