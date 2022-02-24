import React from 'react';

const Headset = ({ headsets }: any) => {
	// Vat de correcte headset uit de JSON gebaseerd op de headsetName variabel in de URL.
	const headsetName = new URLSearchParams(window.location.search).get("headsetName");
	const headset = headsets.get(headsetName);

	return (
		<>
			<h1 className="title">{headset.naam}</h1>
			<div className="headset-info-container">
				<div>
					<video controls={true}>
						<source src={headset.vid} type="video/mp4"/>
					</video>
				</div>
				<div className="specifications">
					<h1>Specificaties</h1>
					<ul>
						<li>Beeldscherm: {headset.beeldscherm}</li>
						<li>Resolutie: {headset.xResolutie}x{headset.yResolutie}</li>
						<li>Refreshrate: {headset.refreshRate} Hz</li>
						<li>PPD: {headset.PPD}</li>
						<li>FOV: {headset.FOV}</li>
						<li>Gewicht: {headset.gewicht}</li>
						<li>Prijs: {headset.prijs}</li>
						<li>Datum v. Uitgave: {headset.uitgeefDatum}</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Headset