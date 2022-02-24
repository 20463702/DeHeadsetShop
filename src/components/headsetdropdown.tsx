import React from 'react';
import PropTypes from 'prop-types';

const Headsetdropdown = ({ headsets, shown, setPage }: any) => {
    const images = new Map<string, string>([
        ["HTCVive", require("../img/headsets/HTCVive.png")],
        ["OculusRift", require("../img/headsets/OculusRift.png")],
        ["RazorOSVR", require("../img/headsets/ValveIndex.png")],
        ["ValveIndex", require("../img/headsets/ValveIndex.png")],
    ]);

    const getImages = () => {
        let imgs = new Array<JSX.Element>();
        headsets.forEach((h: any) => {
            imgs.push(
                <a href={`/headset?headsetName=${h.naam.toLowerCase()}`}>
                    <img
                        src={images.get(h.naam)}
                        alt={`Plaatje van ${h.naam}`}
                        key={h.naam}
                    />
                </a>
            );
        });
        return imgs;
    }

    if (shown) {
        return (
            <>
                <div id="dropdown-container">
                    {getImages()}
                </div>

                <hr className="red"/>
            </>
        )
    }
    else {
        return <></>;
    }
}

export default Headsetdropdown