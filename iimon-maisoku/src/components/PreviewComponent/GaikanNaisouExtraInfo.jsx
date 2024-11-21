import PropTypes from "prop-types";
import './gaikanEtc.scss';

const GaikanNaisouExtraInfo = ({ inputs, images }) => {
  return (
    <div className='gaikan-naisou-extra'>
        <div className='gaikan-image'>
          <img src={images.image2} alt="Preview_GaikanNaisouExtraInfo1" style={{ maxWidth: "100%" }} />
        </div>
        <div className='naisou-image'>
          <img src={images.image3} alt="Preview_GaikanNaisouExtraInfo2" style={{ maxWidth: "100%" }} />
        </div>
        <div className='extraInfo'>
          <p><strong>input5:</strong> {inputs.input5}</p>
          <p><strong>input6:</strong> {inputs.input6}</p>
        </div>
    </div>
  );
}

GaikanNaisouExtraInfo.propTypes = {
  inputs: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
};

export default GaikanNaisouExtraInfo;
