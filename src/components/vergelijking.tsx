import React, { useState } from 'react';

const Vergelijking = ({ headsets }: any): JSX.Element => {
	const [displayedHeadsets, setDisplayedHeadsets] = useState<string[]>([]);
	const [displayTable, setDisplayTable] = useState<boolean>(false);

	// Vat alle afbeeldingen van de headsets en verwekt ze tot een JSX.Element afbeelding.
	const getVergelijkingImgs = (): JSX.Element[] => {
		let imgs = new Array<JSX.Element>();
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
	const addHeadset = (headsetNaam: string): void => {
		setDisplayTable(true);
		if (displayedHeadsets.indexOf(headsetNaam) === -1) {
			setDisplayedHeadsets([...displayedHeadsets, headsetNaam]);
		}
		updateColumns();
	}
	//

	// Update de colommen van de tabel.
	const updateColumns = (): JSX.Element[] => {
		let output = new Array<JSX.Element>();
		let id = 0;
		displayedHeadsets.forEach((h: string) => {
			let headset = headsets.get(h);
			output.push(
				<tr key={id} id={`${id}`} onClick={() => {removeColumn(headset.naam)}} className="active">
					<td className="img-container"><img src={headset.img} alt={headset.naam}/></td>
					<td>{headset.naam}</td>
					<td>{headset.beeldscherm}</td>
					<td>{headset.xResolutie}x{headset.yResolutie}</td>
					<td>{headset.refreshRate}</td>
					<td>{headset.PPD}</td>
					<td>{headset.FOV}</td>
					<td>{headset.gewicht}</td>
					<td>{headset.prijs}</td>
					<td>{headset.uitgeefDatum}</td>
				</tr>
			);
			id++;
		});
		return output;
	}
	//

	// Haalt een colom weg van de tabel.
	const removeColumn = (col: string): void => {
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
		<main>
			<div id="vergelijking-imgs">
				{getVergelijkingImgs()}
			</div>

			{!displayTable ? "" :
			(<div className="table-container">
				<table>
					<thead>
						<tr>
							<th className="img-container"></th>
							<th>Naam:</th>
							<th>Beeldscherm:</th>
							<th>Resolutie:</th>
							<th>Refresh Rate:</th>
							<th>PPD:</th>
							<th>FOV:</th>
							<th>Gewicht:</th>
							<th>Prijs:</th>
							<th>Datum v. Uitgave:</th>
						</tr>
					</thead>
					<tbody>
						{updateColumns()}
					</tbody>
				</table>
			</div>
			)}
		</main>
	);
}

export default Vergelijking;