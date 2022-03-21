import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const IndexOverOns = () => {
	const [showEmail, setShowEmail] = useState<any>({
		daan: false,
		siebe: false,
	});

	return (
		<main id="index">
			<p id="overons__p">
				DeHeadsetShop is opgericht door wereldbefaamde entrepreneurs, Siebe van Dijck en Daan Portier; onder andere oprichters van HockeyStick Transport Bv.
			</p>

			<div id="founders-box">
				<div>
					<h2>Daan</h2>
					<img src={require("../img/founders/daan.png")} alt="plaaike"/>
					<a
						className="founders-box__email" href="mailto:henkhank004@gmail.com"
						onClick={() => {setShowEmail({...showEmail, daan: true})}}>
						{!showEmail.daan ? "Emailadres" : "henkhank004@gmail.com"}
					</a>
				</div>
				<div>
					<h2>Siebe</h2>
					<video controls={true}>
						<source src={require("../vids/siebe.mp4")} type="video/mp4"/>
					</video>
					<a
						className="founders-box__email" href="mailto:siebevandijck0209@gmail.com"
						onClick={() => {setShowEmail({...showEmail, siebe: true})}}>
						{!showEmail.siebe ? "Emailadres" : "siebevandijck0209@gmail.com"}
					</a>
				</div>
			</div>

			<div id="index__btnContainer">
				<Link to="/">
					<button>
						Over DeHeadsetShop
					</button>
				</Link>
			</div>
		</main>
	);
}

export default IndexOverOns;