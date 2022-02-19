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
