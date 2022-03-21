import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Bestelling = ({ headsets }: any): JSX.Element => {
	const { name } = useParams();
	const headset = headsets.get(name);

	return (
		<main>
			<div className="formMessage">
				<h1>Bevestig uw aankoop </h1>
				<ul>
					<li>Uw aankoop: {headset.naam}</li>
					<li>Prijs: €{headset.prijs}</li>
				</ul>
			</div>

			<form action="mailto:siebevandijck0209@gmail.com">
				<div>
					<label>Uw geslacht:<br/></label>
					<input type="radio" id="man" name="geslacht" value="man"/>
					<label htmlFor="man">Man</label><br/>
					<input type="radio" id="vrouw" name="geslacht" value="vrouw"/>
					<label htmlFor="vrouw">Vrouw</label><br/>
					<input type="radio" id="ikZegHetLieverNiet" name="geslacht" value="ikZegHetLieverNiet"/>
					<label htmlFor="ikZegHetLieverNiet">Zeg ik liever niet</label><br/>
				</div>

				<div>
					<label htmlFor="landVanBezorging">Land van bezorging:</label><br/>
					<select defaultValue="ne" title="landVanBezorging" required>
						<option title="ne">Nederland</option>
						<option title="de">Duitsland</option>
						<option title="be">België</option>
					</select>
				</div>

				<div>
					<label htmlFor="straatnaamEnHuisnummer">Straatnaam en huisnummer*</label><br/>
					<input type="text" title="straatnaamEnHuisnummer" required/>
				</div>

				<div>
					<label htmlFor="postcode">Postcode*</label><br/>
					<input type="text" title="postcode" required/>
				</div>

				<div>
					<label htmlFor="plaats">Plaats*</label><br/>
					<input type="text" title="plaats" required/>
				</div>

				<div>
					<label htmlFor="telefoonnummer">Telefoonnummer*</label><br/>
					<input type="tel" title="telefoonnummer" required/>
				</div>

				<div>
					<label htmlFor="emailadres">Emailadres*</label><br/>
					<input type="email" title="emailadres" required/>
				</div>

				<div>
					<label htmlFor="extraToevoegingen">Extra toevoegingen</label><br/>
					<textarea title="extraToevoegingen" cols={25} rows={5}/>
				</div>

				<div>
					<input type="submit" value="Verzenden" onClick={() => {window.location.href = "https://okke.dev/vw4"}}/>
				</div>
			</form>
		</main>
	);
}

Bestelling.propTypes = {
	headsets: PropTypes.any.isRequired,
}

export default Bestelling;
