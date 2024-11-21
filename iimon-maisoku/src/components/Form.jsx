import PropTypes from "prop-types";

const Form = ({ inputs, onInputChange, images, onImageChange }) => {
  const handleInputChangeInternal = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleImageChangeInternal = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      onImageChange(name, URL.createObjectURL(files[0])); // ファイルのURLを生成
    }
  };

  return (
    <div>
      <h2>Form</h2>
      {Object.keys(inputs).map((key) => (
        <div key={key} style={{ marginBottom: "10px" }}>
          <label htmlFor={key}>{key}</label>
          <input
            id={key}
            name={key}
            type="text"
            value={inputs[key]}
            onChange={handleInputChangeInternal}
            placeholder={`Enter text for ${key}`}
          />
        </div>
      ))}
      <h2>Upload Images</h2>
      {Object.keys(images).map((key) => (
        <div key={key} style={{ marginBottom: "10px" }}>
          <label htmlFor={key}>{key}</label>
          <input
            id={key}
            name={key}
            type="file"
            accept="image/*"
            onChange={handleImageChangeInternal}
          />
        </div>
      ))}
    </div>
  );
};

// PropTypes を定義
Form.propTypes = {
  inputs: PropTypes.objectOf(PropTypes.string).isRequired,
  onInputChange: PropTypes.func.isRequired,
  images: PropTypes.objectOf(PropTypes.any).isRequired,
  onImageChange: PropTypes.func.isRequired,
};

export default Form;