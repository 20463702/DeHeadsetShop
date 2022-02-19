import React from 'react';
import img19eEeuw from '../img/geschiedenis/360deg_painting.png';
import img1950 from '../img/geschiedenis/sensorama.png';

const Geschiedenis = () => {
	return (
		<>
			<div className="text-container">
				<h2>19e Eeuw</h2>
				<div className="par-text">
					<div>
						<p>
							De oudste pogingen een omgeving na te bootsen waren in de 19e eeuw door schilders en andere kunstenaren, zij maakte 360 graden schilderijen of andere kunstwerken. Ze deden dit om de beschouwers te laten voelen alsof ze zelf in dat moment zaten.
						</p>
					</div>
				<img src={img19eEeuw} alt="360 Graden Schilderij"/>
				</div>
			</div>

			<div className="text-container">
				<h2>1883</h2>
				<div className="par-text">
					<div>
						<p>
							In 1838 maakte de Engelse wetenschapper Charles Wheatstone de ontdekking dat wanneer beide ogen twee iets verschillende afbeeldingen te zien krijgen de hersenen deze samenvoegen tot een drie dimensionale afbeelding. Dit leidde tot de uitvinding van drie dimensionale stereoscopische weergave.
						</p>
					</div>
				</div>
			</div>

			<div className="text-container">
				<h2>Jaren 1930</h2>
				<div className="par-text">
					<div>
						<p>
							Vele jaren later, in de jaren dertig van de 20e eeuw, was virtual reality een ware hype onder sciencefiction schrijvers. Zo voorspelde vele sciencefiction boeken een toekomst met levensechte computer gegenereerde omgevingen die alle zintuigen doen prikkelen.
						</p>
					</div>
				</div>
			</div>

			<div className="text-container">
				<h2>Jaren 1950</h2>
				<div className="par-text">
					<div>
						<p>
							Douglas Engelbert, een elektrische ingenieur, kwam met het gewaagde idee om computers te gebruiken voor het voorzien van informatie. Dit was ongewoon gezien computers in deze tijd gezien werden als verheerlijkte rekenmachines. Desondanks hadden vele mensen behoefte aan een manier om data te visualiseren. Zijn werk voor het Augmentation Reseach Center Lab leidde, onder andere, tot de creatie van de computer muis, hypertext, computernetwerken en voorgangers van GUIs (graphical user interfaces).
						</p>
						<p>
							In de jaren vijftig werd ook de Sensorama ontworpen door uitvinder Morton Heilig, de Sensorama was een theater cabine met audio, geur generatoren en stereoscopische filmprojectoren. Dit alles om de gebruikers te laten voelen als of zij zelf in de film zaten.
						</p>
					</div>
				<img src={img1950} alt="Sensorama"/>
				</div>
			</div>

			<div className="text-container">
				<h2>Jaren 1960</h2>
				<div className="par-text">
					<div>
						<p>
							In de jaren zestig vond Morton Heilig de Telesphere Mask uit, de eerste HMD (Head Mounted Display). Deze eerste HMD bevatte geen beweging sensoren.
						</p>
					</div>
				</div>
			</div>
 
			<div className="text-container">
				<h2>1961</h2>
				<div className="par-text">
					<div>
						<p>
							In 1961 werd de eerste HMD mét beweging sensoren ontwikkeld door Philco, de Headsight werd deze HMD genoemd. De Headsight was niet bedoeld voor VR maar voor militaire applicaties om van een afstand gevaarlijke situaties te bekijken.
						</p>
					</div>
				</div>
			</div>

			<div className="text-container">
				<h2>1965</h2>
				<div className="par-text">
					<div>
						<p>
						Ivan Sutherland presenteerde zijn visie van de Ultimate Display. Het concept was een virtuele wereld die door een HMD gezien zou worden, deze wereld zou zo echt moeten lijken dat de gebruiker het verschil tussen deze virtuele wereld en de echte niet kan zien door onder andere de gebruiker interacties te laten hebben met objecten. Zijn scriptie wordt gezien als de blueprint voor VR.
						</p>
					</div>
				</div>
			</div>

			//TODO Rest v.d. geschiedenis in JSX omzetten
		</>
	)
}

export default Geschiedenis