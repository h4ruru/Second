import './App.css'
import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

const App = () => {
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
  });

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  // 入力値変更時に状態を更新する関数
  const handleInputChange = (name, value) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 画像ファイル変更時に状態を更新する関数
  const handleImageChange = (name, file) => {
    setImages((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  return (
    <div className="main-container">
      {/* 左側のプレビュー */}
      <div className="form-section">
        <Form
          inputs={inputs}
          onInputChange={handleInputChange}
          images={images}
          onImageChange={handleImageChange}
        />
      </div>
      {/* 右側のフォーム */}
      <div className="preview-section">
        <Preview inputs={inputs} images={images} />
      </div>
    </div>
  );
};

export default App;