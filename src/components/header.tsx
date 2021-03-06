import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ page, setPage, toggleHeadsetsMenu, showHeadsetsMenu }: any): JSX.Element => {
	return (
		<header id="header">
			<div id="title">
				<h1>DeHeadsetShop</h1>
				</div>
				<div className="horizontal-flex-container">
					<div>
						<Link to="/">
							<button
								className={page === "index" ? "button-selected" : ""}
								onClick={() => {setPage("index")}}>
								Home
							</button>
						</Link>
					</div>
					<div>
						<Link to="/informatie/geschiedenis">
							<button
								className={page === "geschiedenis" ? "button-selected" : ""}
								onClick={() => {setPage("geschiedenis")}}>
								Geschiedenis
							</button>
						</Link>
					</div>
					<div>
						<button
							className={showHeadsetsMenu ? "button-selected" : ""}
							onClick={toggleHeadsetsMenu}>
							Diverse Headsets
						</button>
					</div>
					<div>
						<Link to="/informatie/applicaties">
							<button
								className={page === "applicaties" ? "button-selected" : ""}
								onClick={() => {setPage("applicaties")}}>
								Applicaties
							</button>
						</Link>
					</div>
					<div>
						<Link to="/vergelijking">
							<button
								className={page === "vergelijking" ? "button-selected" : ""}
								onClick={() => {setPage("vergelijking")}}>
								Vergelijking
							</button>
						</Link>
					</div>
				</div>
			<div id="headsets-container"></div>
			<hr className="red"/>
		</header>
	);
}

Header.propTypes = {
	page: PropTypes.any,
	setPage: PropTypes.func.isRequired,
	toggleHeadsetsMenu: PropTypes.func.isRequired,
	showHeadsetsMenu: PropTypes.bool.isRequired,
}

export default Header;