import React from 'react';

const bestelling = ({ headsets }: any): JSX.Element => {
	const headsetName = new URLSearchParams(window.location.search).get("headsetName");
	const headset = headsets.get(headsetName);

	return (
		//! PLACEHOLDER
		<>
			bestelling {headset.naam}
		</>
		//!
	);
}

export default bestelling;