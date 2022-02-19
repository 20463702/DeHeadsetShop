import React from 'react';
import PropTypes from 'prop-types';

const Headset = ({ headset }: any) => {
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

Headset.propTypes = {
	headset: PropTypes.object,
}

export default Headset