import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recensies = () => {
	const recensieText: Array<string> = [
		"De beeldkwaliteit was een positieve verrassing. Ik had nog geen ervaring met “thuis” VR en het is allemaal veel geavanceerder dan ik had verwacht. Het kwaliteitsverlies, een punt dat op fora wel voorbij komt, is naar mijn idee verwaarloosbaar, helemaal in games zelf. Ook het geluid wordt vaak kritisch beoordeeld. Ik vind het niet denderend, maar ook zeker niet slecht of van een storende kwaliteit. Al met al kan ik de Quest 2 zeker aanraden. De prijs-kwaliteit verhouding is uitmuntend.",
		"VR zet je van het een op het andere moment in een andere wereld. Maar dan ook ECHT. Deze headset heeft een dermate hoge resolutie dat het zicht kraakhelder is. Het geluid is gewoon goed te noemen. Zet het op een niveau dat omgevingsgeluiden wegvallen en je gaat volledig op in de virtuele wereld.",
		"Absoluut een aanrader, veel mogelijkheden, het alsof je in je eigen wereld zit. Je past je algauw aan aan de omgeving",
		"top product",
		"👍",
		"👎",
	];
	// Vat random users en text van verschillende API's.
	const [userData, setUserData] = useState<Array<any>>();
	useEffect(() => {
		axios.get("https://randomuser.me/api/?results=3")
		.then((res) => {
			setUserData(res.data.results);
		})
		.catch((err) => {console.error(err)});
	}, []);

	const randomIndex = (max: number): number => {
		return Math.floor(Math.random() * max);
	}

	return (
		<div className="recensies">
			<h1>Recensies</h1>
			{userData?.map((u) => {
				return (
					<div key={u.id.value} className="recensie">
						<div className="user-data-container">
							<img src={u.picture.medium} alt="Gebruiker Afbeelding"/>
							<h3>{u.name.last}, {u.name.first}</h3>
						</div>
						<p>{recensieText[randomIndex(recensieText.length)]}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Recensies