import PropTypes from "prop-types";
import Header from './PreviewComponent/Header'
import BasicInfo from './PreviewComponent/BasicInfo.jsx'
import './preview.scss'
import NaisouFacility from './PreviewComponent/NaisouFacility.jsx'
import GaikanNaisouExtraInfo from './PreviewComponent/GaikanNaisouExtraInfo.jsx'
import Access from './PreviewComponent/Access.jsx'

const Preview = ({ inputs, images }) => {
    return (
        <div className='preview'>
            <Header />
            <div className='basic-info-container'>
                <BasicInfo className='basic-info' images={images}/>
                <NaisouFacility className='naisou-facility' inputs={inputs}/>
            </div>
            <div className='gaikan-naisou-etrainfo-container'>
                <GaikanNaisouExtraInfo inputs={inputs} images={images}/>
                <Access inputs={inputs} images={images}/>
            </div>
            
        </div>
    )
}

Preview.propTypes = {
    inputs: PropTypes.objectOf(PropTypes.string).isRequired,
    images: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Preview
