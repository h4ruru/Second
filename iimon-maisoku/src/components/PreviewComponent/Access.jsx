import './access.scss'
import PropTypes from "prop-types";

const Access = ({ inputs, images }) => {
  return (
    <div className="access">
        <div className="access-text">
          <p><strong>input7:</strong> {inputs.input7}</p>
        </div>
        <div className="access-image">
          <img src={images.image4} alt="Preview_Access" style={{ maxWidth: "100%" }} />
        </div>
    </div>
  )
}

Access.propTypes = {
  inputs: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
};
export default Access
