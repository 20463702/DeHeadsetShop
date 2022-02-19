import React, { useState } from 'react';
import './App.css';
import Index from './components/index';
import Header from './components/header';
import Headset from './components/headset';
import Informatie from './components/informatie';
import Vergelijking from './components/vergelijking';
import Bronnen from './components/bronnen';
import HeadsetDropDown from './components/headsetdropdown';
import imgHTCVive from './img/headsets/HTCVive.png';
import imgOculusRift from './img/headsets/OculusRift.png';
import imgRazorOSVR from './img/headsets/RazorOSVR.png';
import imgValveIndex from './img/headsets/ValveIndex.png';
import img19eEeuw from './img/geschiedenis/360deg_painting.png';
import img1950 from './img/geschiedenis/sensorama.png';

const App = () => {
    const [page, setPage] = useState("index");
    const [showHeadsetDropDown, setShowHeadsetDropDown] = useState(false);
	const [showBronnen, setShowBronnen] = useState(false);
    const headsets = new Map<string, object>([
        ["htcvive", {
            naam: "HTCVive",
            beeldscherm: "OLED",
            xResolutie: 1080,
            yResolutie: 1200,
            refreshRate: 90,
            PPD: 9.81,
            FOV: 110,
            gewicht: 468,
            prijs: 400,
            uitgeefDatum: "05-04-2016",
            img: imgHTCVive,
        }],
        ["oculusrift", {
            naam: "OculusRift",
            beeldscherm: "OLED",
            xResolutie: 1080,
            yResolutie: 1200,
            refreshRate: 90,
            PPD: 9.87,
            FOV: 94,
            gewicht: 470,
            prijs: 350,
            uitgeefDatum: "28-03-2016",
            img: imgOculusRift,
        }],
        ["razorosvr", {
            naam: "RazorOSVR",
            beeldscherm: "OLED",
            xResolutie: 1080,
            yResolutie: 1200,
            refreshRate: 90,
            PPD: 9.81,
            FOV: 110,
            gewicht: 650,
            prijs: 400,
            uitgeefDatum: "20-07-2016",
            img: imgRazorOSVR,
        }],
        ["valveindex", {
            naam: "ValveIndex",
            beeldscherm: "LCD",
            xResolutie: 1440,
            yResolutie: 1600,
            refreshRate: 144,
            PPD: 11.07,
            FOV: 130,
            gewicht: 809,
            prijs: 1000,
            uitgeefDatum: "01-05-2019",
            img: imgValveIndex,
        }],
    ])
	const geschiedenisInformatie: object[] = [
		{
			title: "19e Eeuw",
			par1: "De oudste pogingen een omgeving na te bootsen waren in de 19e eeuw door schilders en andere kunstenaren, zij maakte 360 graden schilderijen of andere kunstwerken. Ze deden dit om de beschouwers te laten voelen alsof ze zelf in dat moment zaten.",
			img: img19eEeuw,
			imgAlt: "360 graden schilderij",
		},
		{
			title: "1883",
			par1: "In 1838 maakte de Engelse wetenschapper Charles Wheatstone de ontdekking dat wanneer beide ogen twee iets verschillende afbeeldingen te zien krijgen de hersenen deze samenvoegen tot een drie dimensionale afbeelding. Dit leidde tot de uitvinding van drie dimensionale stereoscopische weergave.",
		},
		{
			title: "Jaren 1930",
			par1: "Vele jaren later, in de jaren dertig van de 20e eeuw, was virtual reality een ware hype onder sciencefiction schrijvers. Zo voorspelde vele sciencefiction boeken een toekomst met levensechte computer gegenereerde omgevingen die alle zintuigen doen prikkelen.",
		},
		{
			title: "Jaren 1950",
			par1: "Douglas Engelbert, een elektrische ingenieur, kwam met het gewaagde idee om computers te gebruiken voor het voorzien van informatie. Dit was ongewoon gezien computers in deze tijd gezien werden als verheerlijkte rekenmachines. Desondanks hadden vele mensen behoefte aan een manier om data te visualiseren. Zijn werk voor het Augmentation Reseach Center Lab leidde, onder andere, tot de creatie van de computer muis, hypertext, computernetwerken en voorgangers van GUIs (graphical user interfaces).",
			par2: "In de jaren vijftig werd ook de Sensorama ontworpen door uitvinder Morton Heilig, de Sensorama was een theater cabine met audio, geur generatoren en stereoscopische filmprojectoren. Dit alles om de gebruikers te laten voelen als of zij zelf in de film zaten.",
			img: img1950,
			imgAlt: "Sensorama",
		},
	];

    const toggleHeadsetsMenu = () => {
        setShowHeadsetDropDown(!showHeadsetDropDown);
    }

    // Zet de pagina state naar de pagina die correspondeerd met de geklikte knop.
    const setCurrentPage = (page: string) => {
        setPage(page);
        setShowHeadsetDropDown(false);
        setShowBronnen(false);
    }
    //


    // Checkt welke pagina momenteel gedisplayed moet worden.
    const getPage = () => {
        if (page === "index") {
            return <Index />
        } else if (page === "geschiedenis") {
            return <Informatie info="geschiedenis" />
        } else if (page === "applicaties") {
            return <Informatie info="applicaties" />
        } else if (page === "vergelijking") {
            return <Vergelijking headsets={headsets}/>
        } else { //* Diverse headsets
            return <Headset headset={headsets.get(`${page}`)}/>
        }
    }
    //

    return (
        <div>
            <Header
                page={page}
                setPage={setCurrentPage}
                toggleHeadsetsMenu={toggleHeadsetsMenu}
                showHeadsetsMenu={showHeadsetDropDown}
            />
            <HeadsetDropDown
                shown={showHeadsetDropDown}
                setPage={setCurrentPage}
            />
            {getPage()}
            <Bronnen
                showBronnen={showBronnen}
                setShowBronnen={setShowBronnen}
            />
        </div>
    );
}

export default App;
