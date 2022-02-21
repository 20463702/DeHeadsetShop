import React from 'react';

const Headset = ({ headsets }: any) => {
	const getHeadset = () => {
		// Vat de correcte headset uit de JSON gebaseerd op de headsetName variabel in de URL.
		const headsetName = new URLSearchParams(window.location.search).get("headsetName");
		const headset = headsets.get(headsetName);

		// Zet het headset object om in een array van JSX elementen.
		let headsetInfo = new Array<JSX.Element>()
		for (const key in headset) {
			if (`${key}` !== "img") {
				headsetInfo.push(
					<h4 key={headset[key]}>{headset[key]}</h4>
				);
			} else {
				headsetInfo.push(
					<img key={headset[key]} src={headset[key]} alt={headset.naam} />
				);
			}
		}
		return headsetInfo;
	}
	const headset = getHeadset();


	return (
		<div>
			//! PLACEHOLDER
			{headset}
			//!
		</div>
	)
}

export default Headset