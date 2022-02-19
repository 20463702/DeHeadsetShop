import React from 'react';
import PropTypes from 'prop-types';

const Headset = ({ headsets }: any) => {
    const headsetName = new URLSearchParams(window.location.search).get("headsetName");
	const headset = headsets.get(headsetName)
	//! PLACEHOLDER
	let headsetInfo = new Array<JSX.Element>()
	for (const key in headset) {
		if (`${key}` !== "img") {
			headsetInfo = [...headsetInfo, <h4 key={headset[key]}>{headset[key]}</h4>];
		} else {
			headsetInfo = [...headsetInfo, <img key={headset[key]} src={headset[key]} alt={headset.naam} />];
		}
	} //!

	return (
		<div>
			//! PLACEHOLDER
			{headsetInfo}
			//!
		</div>
	)
}

export default Headset