import React, { useState } from 'react'

const Vergelijking = ({ headsets }: any) => {
	const [displayedHeadsets, setDisplayedHeadsets]: any = useState([]);
	const [displayTable, setDisplayTable]: any = useState(false);

	// Vat alle afbeeldingen van de headsets en verwekt ze tot een JSX.Element afbeelding.
	const getVergelijkingImgs = () => {
		let imgs: JSX.Element[] = [];
		headsets.forEach((h: any) => {
			imgs.push(
				<img
					key={h.naam}
					src={h.img}
					alt={h.naam}
					onClick={() => {addHeadset(`${h.naam.toLowerCase()}`)}}
				/>
			);
		});
		return imgs;
	}
	//

	// Voegt een headset toe aan de vergelijking.
	const addHeadset = (headsetNaam: string) => {
		setDisplayTable(true);
		if (displayedHeadsets.indexOf(headsetNaam) === -1) {
			setDisplayedHeadsets([...displayedHeadsets, headsetNaam]);
		}
		updateColumns();
	}
	//

	// Update de colommen van de tabel.
	const updateColumns = () => {
		let output = new Array<JSX.Element>();
		let id = 0;
		displayedHeadsets.forEach((h: string) => {
			let headset = headsets.get(h);
			output.push(
				<div key={id} id={`${id}`} onClick={() => {removeColumn(headset.naam)}} className="vergelijking-table-column">
					<img src={headset.img} alt={headset.naam}/>
					<h3>{headset.naam}</h3>
					<h3>{headset.beeldscherm}</h3>
					<h3>{headset.xResolutie}x{headset.yResolutie}</h3>
					<h3>{headset.refreshRate}</h3>
					<h3>{headset.PPD}</h3>
					<h3>{headset.FOV}</h3>
					<h3>{headset.gewicht}</h3>
					<h3>{headset.prijs}</h3>
					<h3>{headset.uitgeefDatum}</h3>
				</div>
			);
			id++;
		});
		return output;
	}
	//

	// Haalt een colom weg van de tabel.
	const removeColumn = (col: string) => {
		let updatedHeadsets = new Array<string>();
		displayedHeadsets.forEach((h: string) => {
			if (h.toLowerCase() !== col.toLowerCase()) {
				updatedHeadsets = [...updatedHeadsets, h];
			}
		});
		setDisplayedHeadsets(updatedHeadsets);
	}
	//

	return (
		<>
			<div id="vergelijking-imgs">
				{getVergelijkingImgs()}
			</div>

			{!displayTable ? "" : (<div id="vergelijking-table">
				<div id="vergelijking-table-headers">
					<h3>Naam:</h3>
					<h3>Beeldscherm:</h3>
					<h3>Resolutie:</h3>
					<h3>Refresh Rate:</h3>
					<h3>PPD:</h3>
					<h3>FOV:</h3>
					<h3>Gewicht:</h3>
					<h3>Prijs:</h3>
					<h3>Datum v. Uitgave:</h3>
				</div>

				{updateColumns()}
			</div>
			)}
		</>
	)
}

export default Vergelijking