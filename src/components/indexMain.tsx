import React from 'react';
import { Link } from 'react-router-dom';

const indexMain = () => {
	return (
		 <main id="index">
			<div id="index__title">
				<h1>DeHeadsetShop</h1>
				<p>Al acht jaar lang dé nummer één online winkel voor VR producten</p>
			</div>

			<div id="index__informatie">
				<p>
					Deheadsetshop verkoopt al 10 jaar virtual reality brillen van de hoogste kwaliteit.
					Persoonlijk advies en een grote selectie headsets staan wij bekent voor.
					Ook voor al uw vragen over deze spiksplinter nieuwe technologie worden beantwoord door onze geweldige, wereldbefaamde klanten service.
					Gevestigd in Dongen blijven wij een familie georiënteerd bedrijf waar kwaliteit altijd voorop staat.
					Begonnen in 2012 met een van de eerste headsets, we zijn nu uitgegroeid met de meest moderne headsets onder onze vleugel.
					Wij focussen op kwaliteit en de beste service voor u.
				</p>
			</div>

			<div id="index__btnContainer">
				<Link to="/index/overons">
					<button>
						Over Ons
					</button>
				</Link>
			</div>
		</main>
	);
}

export default indexMain;