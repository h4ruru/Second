import React from 'react'
import Header from './PreviewComponent/Header'
import BasicInfo from './PreviewComponent/BasicInfo.jsx'
import './preview.scss'
import NaisouFacility from './PreviewComponent/NaisouFacility.jsx'
import GaikanNaisouExtraInfo from './PreviewComponent/GaikanNaisouExtraInfo.jsx'
import Access from './PreviewComponent/Access.jsx'

const Preview = () => {
    return (
        <div className='preview'>
            <Header />
            <div className='basic-info-container'>
                <BasicInfo className='basic-info' />
                <NaisouFacility className='naisou-facility' />
            </div>
            <div className='gaikan-naisou-etrainfo-container'>
                <GaikanNaisouExtraInfo />
                <Access />
            </div>
            
        </div>
    )
}

export default Preview
