import PropTypes from "prop-types";
import './naisouFacility.scss'

const NaisouFacility = ({ inputs }) => {
  return (
    <div className='naisou-facility'>
        <div className="info-text">
          <p><strong>input1:</strong> {inputs.input1}</p>
          <p><strong>input 2:</strong> {inputs.input2}</p>
        </div>
        <div className="facility-info">
          <p><strong>input3:</strong> {inputs.input3}</p>
          <p><strong>input4:</strong> {inputs.input4}</p>
        </div>
    </div>
  )
}

NaisouFacility.propTypes = {
  inputs: PropTypes.object.isRequired,
};

export default NaisouFacility
