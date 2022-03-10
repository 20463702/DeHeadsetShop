import React from 'react';

const Headsetdropdown = ({ headsets, shown }: any): JSX.Element => {
    const getImages = (): JSX.Element[] => {
        let imgs = new Array<JSX.Element>();
        headsets.forEach((h: any) => {
            imgs.push(
                <a key={h.naam} href={`/headset?headsetName=${h.naam.toLowerCase()}`}>
                    <img
                        src={h.img}
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

export default Headsetdropdown;