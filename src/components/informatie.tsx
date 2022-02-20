import React from 'react'
import PropTypeos from 'prop-types';
import geschiedenis from '../json/geschiedenis.json';
import applicaties from '../json/applicaties.json';

const Informatie = ({ info, volgorde, setVolgorde }: any) => {
	// const [volgorde, setVolgorde] = useState(true);
	const images = new Map<string, string>([
		["360degreePainting", require("../img/geschiedenis/360deg_painting.png")],
		["sensorama", require("../img/geschiedenis/sensorama.png")],
		["swordOfDamocles", require("../img/geschiedenis/SwordOfDamocles.png")],
		["videoplace", require("../img/geschiedenis/VIDEOPLACE-vr-platform.png")],
		["VPLResearch", require("../img/geschiedenis/VPL-research-vr-testing.png")],
		["virtualEnvironmentWorkstation", require("../img/geschiedenis/virtual-environment-workstation-project-nasa.png")],
		["vietnam", require("../img/geschiedenis/virtual-vietnam-vr.png")],
		["googleStreetview", ""], //TODO Add image
		["oculusKickstarter", require("../img/geschiedenis/oculus_rift_kickstarter.png")],
		["halfDome", require("../img/geschiedenis/half-dome.png")],
		["oculusQuest2", require("../img/geschiedenis/oculus-quest-2.png")],
		["entertainment", require("../img/applicaties/entertainment.png")],
		["gezondheidszorg", require("../img/applicaties/gezondheidszorg.png")],
		["onderwijs", require("../img/applicaties/vr-in-education.png")],
		["vastgoed", require("../img/applicaties/vastgoed.png")],
	])

	// Vat alle informatie en pleurt het in (const) rawInfo
	const getInfo = (): object[] => {
		let informatie = new Array<object>();
		if (info === "geschiedenis") {
			informatie = geschiedenis;
		} else if (info === "applicaties") {
			informatie = applicaties;
		} else {
			console.error("Invalide informatie naam");
		}
		return informatie
	}
	const rawInfo = getInfo();

	// Flipt de volgorde.
	const changeOrder = (): void => {
		// Benodigde interactie met state om de DOM te updated.
		setVolgorde(!volgorde);
		rawInfo.reverse();
	}

	// Convert alle informatie tot JSX elementen en voegt die toe aan de info array (return).
	const displayInfo = (): JSX.Element[] => {
		let info: JSX.Element[] = [];

		let n = 0;
		rawInfo.forEach((i: any) => {
			info.push(
				<div key={i.title} id={`${n}`} className="text-container">
					<h2>{i.title}</h2>
					<div className="par-text">
						<div>
							<p>
								{i.par1}
							</p>
							{
								i.par2 === undefined ? "" : (
									<p>{i.par2}</p>
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
		let anchors: JSX.Element[] = [];
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
		 	<div id="anchor-display">
				<h3>Secties</h3>
				<div className="anchor-container">
					{displayAnchors()}
				</div>
			 </div>

			<h3 id="change-volgorde" onClick={changeOrder}>Volgorde ⟳</h3>
			{displayInfo()}
		</>
	);
}

Informatie.propTypes = {
	info: PropTypeos.string.isRequired,
	volgorde: PropTypeos.any.isRequired,
	setVolgorde: PropTypeos.func.isRequired,
}

export default Informatie