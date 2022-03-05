import React, { useEffect } from 'react';
import Recensies from './recensies';

const Headset = ({ headsets, setPage }: any): JSX.Element => {
	useEffect(() => {
		setPage(null);
	}, []);

	// Vat de correcte headset uit gebaseerd op de headsetName variabel in de URL.
	const headsetName = new URLSearchParams(window.location.search).get("headsetName");
	const headset = headsets.get(headsetName);

	return (
		<main>
			<h1 className="title">{headset.naam}</h1>
			<div className="headset-info-container">
				<div className="headset-info-container__secondary">
					<div>
						<video controls={true}>
							<source src={headset.vid} type="video/mp4"/>
						</video>
					</div>
					<div>
						<a href={`bestelling?headsetName=${headset.naam.toLowerCase()}`}><button className="red">Bestellen</button></a>
						<div className="specifications">
							<h2>Specificaties</h2>
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
				</div>
				<Recensies />
			</div>
		</main>
	);
}

export default Headset;