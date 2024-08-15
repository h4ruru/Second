import React, { useState } from 'react';
import './form-css/Form.scss';
import './form-css/p-Form.scss';
import FormHeader from'./FormHeader';
import FormText from'./FormText';
import FormPicture from'./FormPicture';
import FormCheckbox from'./FormCheckbox';
import FormTPrevew from'./FormTPrevew';
import FormPPrevew from './FormPPrevew';
import FormCPrevew from './FormCPrevew';

function Form() {

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
      
    const handleValuesChange = (newValues) => {
        setInputValues(newValues);
    };



    const [images, setImages] = useState({
        MadoriPicture: null,
        GaikanPicture: null,
        NaisouPicture: null,
        AccessPicture: null,
      });
    
      const handleImageChange = (name, file) => {
        setImages(prevImages => ({
          ...prevImages,
          [name]: file,
        }));
    };
    


    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectionChange = (options) => {
      setSelectedOptions(options); // 選択されたオプションを更新
    };


    
    return (
        <div className="l-Form">
            <FormHeader />
            <div p-Form>
                <FormText onValuesChange={handleValuesChange} />
                <FormPicture onImageChange={handleImageChange} />
                <FormCheckbox onSelectionChange={handleSelectionChange} />
            </div>
            <h3>Prevew</h3>
            <div className='l-Prevew'>
                <div className='p-TPrevew'> 
                    <FormTPrevew values={inputValues} />
                </div>
                <div className='p-PPrevew'> 
                    <FormPPrevew images={images} />
                </div>
                <div className='p-CPrevew'> 
                    <FormCPrevew selectedOptions={selectedOptions} />
                </div>
            </div>
        </div>
    )
}

export default Form