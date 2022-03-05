import React, { useEffect, useState } from 'react';
import axios from 'axios';
import recensieText from '../json/recensies.json';

const Recensies = (): JSX.Element => {
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

export default Recensies;