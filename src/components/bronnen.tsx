import React from 'react';
import PropTypes from 'prop-types';
import bronnenJSON from '../json/bronnen.json';

const Bronnen = ({ showBronnen, setShowBronnen }: any) => {
	const toggleBronnen = () => {setShowBronnen(!showBronnen)}

	// Convert alle bronnen tot JSX elementen en voegt die toe aan de bronnen array (return).
	const getBronnen = () => {
		let bronnen: JSX.Element[] = new Array<JSX.Element>();
		bronnenJSON.forEach((b: any) => {
			bronnen.push(
				<p key={`${b.auteur} -- ${b.titel}`} className="bron">
					{b.auteur}{b.auteur === "" ? "" : "."}&nbsp;
					{b.titel}&nbsp;&nbsp;
					{b.publicatie}.&nbsp;&nbsp;
					{b.bronNaam}.&nbsp;&nbsp;
					Geraadpleegd op {b.raadpleging},&nbsp;&nbsp;
					van <a href={b.url} target="_blank" rel="noreferrer">{b.url}</a>
				</p>
			)
		});
		return bronnen;
	}

	return (
		<>
			<div className="horizontal-flex-container">
				<button
					className={showBronnen ? "button-selected" : ""}	
					onClick={() => {toggleBronnen()}}
				>
					{showBronnen ? "Verberg Bronnen" : "Open Bronnen"}
				</button>
			</div>
			{showBronnen ?
			<div className="horizontal-flex-container">
				{getBronnen()}
			</div> : <></>}
		</>
	)
}

Bronnen.propTypes = {
	showBronnen: PropTypes.bool.isRequired,
	setShowBronnen: PropTypes.func.isRequired,
}

export default Bronnen