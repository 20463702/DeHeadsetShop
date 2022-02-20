import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ page, setPage, toggleHeadsetsMenu, showHeadsetsMenu }: any) => {
	return (
		<div id="header">
			<div id="title">
				<h1>DeHeadsetShop</h1>
				</div>
				{/* De onClick functie is er voor de benodigde interactie met State */}
				<div className="horizontal-flex-container">
					<Link to="/">
						<button
							className={page === null ? "button-selected" : ""}
							onClick={() => {setPage(null)}}>
							Index
						</button>
					</Link>
					<Link to="/geschiedenis">
						<button
							className={page === "geschiedenis" ? "button-selected" : ""}
							onClick={() => {setPage("geschiedenis")}}>
							Geschiedenis
						</button>
					</Link>
					<button
						className={showHeadsetsMenu ? "button-selected" : ""}
						onClick={toggleHeadsetsMenu}>
						Diverse Headsets
					</button>
					<Link to="/applicaties">
						<button
							className={page === "applicaties" ? "button-selected" : ""}
							onClick={() => {setPage("applicaties")}}>
							Applicaties
						</button>
					</Link>
					<Link to="/vergelijking">
						<button
							className={page === "vergelijking" ? "button-selected" : ""}
							onClick={() => {setPage("vergelijking")}}>
							Vergelijking
						</button>
					</Link>
				</div>
			<div id="headsets-container"></div>
			<hr className="red"/>
		</div>
	)
}

Header.propTypes = {
	page: PropTypes.any,
	setPage: PropTypes.func.isRequired,
	toggleHeadsetsMenu: PropTypes.func.isRequired,
	showHeadsetsMenu: PropTypes.bool.isRequired,
}

export default Header