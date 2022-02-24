import React from 'react';
import PropTypes from 'prop-types';
import imgHTCVive from '../img/headsets/HTCVive.png';
import imgOculusRift from '../img/headsets/OculusRift.png';
import imgRazorOSVR from '../img/headsets/RazorOSVR.png';
import imgValveIndex from '../img/headsets/ValveIndex.png';

const Headsetdropdown = ({ shown, set, setPage }: any) => {
    if (shown) {
        return (
            <>
                <div id="dropdown-container">
                    <a href="/headset?headsetName=htcvive">
                        <img
                            src={imgHTCVive}
                            alt="HTCVive"
                        />
                    </a>
                    <a href="/headset?headsetName=oculusrift">
                        <img
                            src={imgOculusRift}
                            alt="OculusRift"
                        />                
                    </a>
                    <a href="/headset?headsetName=razorosvr">
                        <img
                            src={imgRazorOSVR}
                            alt="RazorOSVR"
                        />                
                    </a>
                    <a href="/headset?headsetName=valveindex">
                        <img
                            src={imgValveIndex}
                            alt="ValveIndex"
                        />                
                    </a>
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
    shown: PropTypes.bool.isRequired,
    setPage: PropTypes.func.isRequired,
}

export default Headsetdropdown