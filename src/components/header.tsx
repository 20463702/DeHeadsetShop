import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = ({ setPage, toggleHeadsetsMenu, showHeadsetsMenu }: any) => {
	// Vat parameter "p" uit de URL.
	const page = new URLSearchParams(window.location.search).get("p")
	return (
		<div>
			<div id="title">
				<h1>DeHeadsetShop</h1>
				</div>
				{/* Na ongeveer een uur debuggen ben ik tot de [allicht incorrecte] conclusie gekomen dat de knoppen een
					interactie met state nodig hebben om hun className te updated, van daar dat er een eigenlijk ongebruikte
					state funcite bij de onClick staat. */}
				<div className="button-container">
					<Link to="/">
						<button className={page === null ? "button-selected" : ""} onClick={() => {setPage("index")}}>Index</button>
					</Link>
					<Link to="/geschiedenis?p=g">
						<button className={page === "g" ? "button-selected" : ""} onClick={() => {setPage("geschiedenis")}}>Geschiedenis</button>
					</Link>
					<button className={showHeadsetsMenu ? "button-selected" : ""} onClick={toggleHeadsetsMenu}>Diverse Headsets</button>
					<Link to="/applicaties?p=a">
						<button className={page === "a" ? "button-selected" : ""} onClick={() => {setPage("applicaties")}}>Applicaties</button>
					</Link>
					<Link to="/vergelijking?p=v">
						<button className={page === "v" ? "button-selected" : ""} onClick={() => {setPage("vergelijking")}}>Vergelijking</button>
					</Link>
				</div>
			<div id="headsets-container"></div>
			<hr className="red"/>
		</div>
	)
}

Header.propTypes = {
	setPage: PropTypes.func.isRequired,
	toggleHeadsetsMenu: PropTypes.func.isRequired,
	showHeadsetsMenu: PropTypes.bool.isRequired,
}

export default Header