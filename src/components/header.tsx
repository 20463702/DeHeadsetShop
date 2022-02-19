import React from 'react'
import PropTypes from 'prop-types';

const Header = ({ page, setPage, toggleHeadsetsMenu, showHeadsetsMenu }: any) => {
	return (
		<div>
			<div id="title">
				<h1>DeHeadsetShop</h1>
				</div>
				<div className="button-container">
					<button className={page === "index" ? "button-selected" : ""} onClick={() => {setPage("index")}}>Index</button>
					<button className={page === "geschiedenis" ? "button-selected" : ""} onClick={() => {setPage("geschiedenis")}}>Geschiedenis</button>
					<button className={showHeadsetsMenu ? "button-selected" : ""} onClick={toggleHeadsetsMenu}>Diverse Headsets</button>
					<button className={page === "applicaties" ? "button-selected" : ""} onClick={() => {setPage("applicaties")}}>Applicaties</button>
					<button className={page === "vergelijking" ? "button-selected" : ""} onClick={() => {setPage("vergelijking")}}>Vergelijking</button>
				</div>
				<div id="headsets-container"></div>
				<hr className="red"/>
		</div>
	)
}

Header.propTypes = {
	page: PropTypes.string.isRequired,
	setPage: PropTypes.func.isRequired,
	toggleHeadsetsMenu: PropTypes.func.isRequired,
	showHeadsetsMenu: PropTypes.bool.isRequired,
}

export default Header