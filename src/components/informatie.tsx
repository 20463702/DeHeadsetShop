import React, { useEffect } from 'react';
import PropTypeos from 'prop-types';
import Footer from './footer';
import Bronnen from './bronnen';

const Informatie = ({ order, setOrder, setPage, showBronnen, setShowBronnen }: any): JSX.Element => {
	const informationName = new URLSearchParams(window.location.search).get("p");
	const rawInfo = require(`../json/${informationName}.json`);
	
	const images = new Map<string, string>([
		["360degreePainting", require("../img/geschiedenis/360deg_painting.png")],
		["sensorama", require("../img/geschiedenis/sensorama.png")],
		["swordOfDamocles", require("../img/geschiedenis/SwordOfDamocles.png")],
		["videoplace", require("../img/geschiedenis/VIDEOPLACE-vr-platform.png")],
		["VPLResearch", require("../img/geschiedenis/VPL-research-vr-testing.png")],
		["virtualEnvironmentWorkstation", require("../img/geschiedenis/virtual-environment-workstation-project-nasa.png")],
		["vietnam", require("../img/geschiedenis/virtual-vietnam-vr.png")],
		["googleStreetview", require("../img/geschiedenis/streetview.png")],
		["oculusKickstarter", require("../img/geschiedenis/oculus_rift_kickstarter.png")],
		["halfDome", require("../img/geschiedenis/half-dome.png")],
		["oculusQuest2", require("../img/geschiedenis/oculus-quest-2.png")],
		["entertainment", require("../img/applicaties/entertainment.png")],
		["gezondheidszorg", require("../img/applicaties/gezondheidszorg.png")],
		["onderwijs", require("../img/applicaties/vr-in-education.png")],
		["vastgoed", require("../img/applicaties/vastgoed.png")],
	]);

	// Flipt de volgorde.
	const changeOrder = (): void => {
		setOrder(!order);
		rawInfo.reverse();
	}

	// Convert alle informatie tot JSX elementen en voegt die toe aan de info array (return).
	const displayInfo = (): JSX.Element[] => {
		let info = new Array<JSX.Element>();

		let n = 0;
		rawInfo.forEach((i: any) => {
			info.push(
				<div key={i.title} id={`${n}`} className="text-container">
					<h2>{i.title}</h2>
					<div className="par-text">
						<div>
							<p className="par-text__paragraph">
								{i.par1}
							</p>
							{
								i.par2 === undefined ? "" : (
									<p className="par-text__paragraph">{i.par2}</p>
								)
							}
						</div>
						{
							i.img === undefined ? "" : (
								<img src={images.get(i.img)} alt={i.imgAlt}/>
							)
						}
					</div>
				</div>
			);
			n++;
		});
		return info;
	}

	// Maakt een anker voor iedere sectie v.d. informatie en returned deze ankers.
	const displayAnchors = (): JSX.Element[] => {
		let anchors = new Array<JSX.Element>();
		let n = 0;
		rawInfo.forEach((i: any) => {
			anchors.push(
				<a key={n} href={`#${n}`}>
					{i.title}
				</a>
			)
			n++;
		});
		return anchors;
	}

	return (
		<>
			<main>
				<div id="anchor-display">
					<h3>Secties</h3>
					<div id="anchor-container">
						{displayAnchors()}
					</div>
				</div>

				<h3 id="change-volgorde" onClick={changeOrder}>Volgorde ⟳</h3>

				<div id="information-container">
					{displayInfo()}
				</div>
			</main>

			<Bronnen
				showBronnen={showBronnen}
				setShowBronnen={setShowBronnen}
			/>

			<Footer/>
		</>
	);
}

Informatie.propTypes = {
	order: PropTypeos.any.isRequired,
	setOrder: PropTypeos.func.isRequired,
	setPage: PropTypeos.func.isRequired,
	showBronnen: PropTypeos.bool.isRequired,
	setShowBronnen: PropTypeos.func.isRequired,
}

export default Informatie