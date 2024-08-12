import React from 'react';

function DisplayFormText({ values }) {
  return (
    <div className='l-FormTextDisplay'>
      <h1 className='p-FormTextDisplayh1'>Prevew</h1>
        <p>物件名: {values.物件名}</p>
        <p>住所: {values.住所}</p>
        <p>面積: {values.面積}</p>
        <p>間取り: {values.間取り}</p>
        <p>築年: {values.築年}</p>
        <p>階: {values.階}</p>
        <p>賃料: {values.賃料}</p>
        <p>敷金: {values.敷金}</p>
        <p>礼金: {values.礼金}</p>
        <p>駅から徒歩: {values.駅から徒歩}</p>
        <p>種類: {values.種類}</p>
      </div>
  );
}

export default DisplayFormText;
