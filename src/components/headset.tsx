import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from './footer';
import Recensies from './recensies';

const Headset = ({ headsets, setPage }: any): JSX.Element => {
	const headsetName = new URLSearchParams(window.location.search).get("n");
	const headset = headsets.get(headsetName);

	return (
		<>
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
							<Link to={`/bestelling?n=${headset.naam.toLowerCase()}`}>
								<button
									className="red"
									onClick={(() => {setPage(null)})}>
									Bestellen
								</button>
							</Link>
							<div className="specifications">
								<h2>Specificaties</h2>
								<ul>
									<li>Beeldscherm: {headset.beeldscherm}</li>
									<li>Resolutie: {headset.xResolutie}x{headset.yResolutie}</li>
									<li>Refreshrate: {headset.refreshRate} Hz</li>
									<li>PPD: {headset.PPD}</li>
									<li>FOV: {headset.FOV}</li>
									<li>Gewicht: {headset.gewicht}</li>
									<li>Prijs: €{headset.prijs}</li>
									<li>Datum v. Uitgave: {headset.uitgeefDatum}</li>
								</ul>
							</div>
						</div>
					</div>
					<Recensies />
				</div>
			</main>

			<Footer/>
		</>
	);
}

Headset.propTypes = {
	headsets: PropTypes.any.isRequired,
	setPage: PropTypes.func.isRequired,
}

export default Headset;