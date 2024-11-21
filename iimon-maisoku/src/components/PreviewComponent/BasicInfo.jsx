import './BasicInfo.scss';
import PropTypes from "prop-types";

const BasicInfo = ({ images }) => {
  return (
    <div className="basic-info">
        <div className="madori-image">
          <img src={images.image1} alt="Preview_BasicInfo" style={{ maxWidth: "100%" }} />
        </div>
    </div>
  );
}

BasicInfo.propTypes = {
  images: PropTypes.object.isRequired,
};

export default BasicInfo;
