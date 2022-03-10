import React from 'react';
import { Link } from 'react-router-dom';

const Headsetdropdown = ({ headsets, shown, setPage }: any): JSX.Element => {
    const getImages = (): JSX.Element[] => {
        let imgs = new Array<JSX.Element>();
        headsets.forEach((h: any) => {
            imgs.push(
                <Link key={h.naam} to={`/headset?n=${h.naam.toLowerCase()}`}>
                    <img
                        src={h.img}
                        alt={`Plaatje van ${h.naam}`}
                        key={h.naam}
						onClick={() => {setPage(null)}}
                    />
                </Link>
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