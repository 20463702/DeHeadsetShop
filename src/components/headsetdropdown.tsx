import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Headsetdropdown.propTypes = {
    headsets: PropTypes.any.isRequired,
    shown: PropTypes.bool.isRequired,
    setPage: PropTypes.func.isRequired,
}

export default Headsetdropdown;