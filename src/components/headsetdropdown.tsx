import React from 'react';
import PropTypes from 'prop-types';
import imgHTCVive from '../img/headsets/HTCVive.png';
import imgOculusRift from '../img/headsets/OculusRift.png';
import imgRazorOSVR from '../img/headsets/RazorOSVR.png';
import imgValveIndex from '../img/headsets/ValveIndex.png';

const Headsetdropdown = ({ shown, setPage }: any) => {
    if (shown) {
        return (
            <>
            <div id="headsets-container">
                <img onClick={() => {setPage("htcvive")}} src={imgHTCVive} alt="HTCVive" />                
                <img onClick={() => {setPage("oculusrift")}} src={imgOculusRift} alt="OculusRift" />                
                <img onClick={() => {setPage("razorosvr")}} src={imgRazorOSVR} alt="RazorOSVR" />                
                <img onClick={() => {setPage("valveindex")}} src={imgValveIndex} alt="ValveIndex" />                
            </div>
            <hr className="red"/>
            </>
        )
    }
    else {
        return <></>;
    }
}

Headsetdropdown.propTypes = {
    setPage: PropTypes.func.isRequired,
    shown: PropTypes.bool.isRequired,
}

export default Headsetdropdown