import React, { useEffect, useState } from 'react';
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

const App = () => {
    // Functioneert als een updated: zie header.tsx voor meer informatie hierover.
    const [page, setPage]: any = useState<string|null>(null);
    // State over of de headset drop down menu wel of niet gelaten zien moet worden.
    const [showHeadsetDropDown, setShowHeadsetDropDown] = useState<boolean>(false);
    // State over of de bronnen gelaten zien moeten worden.
	const [showBronnen, setShowBronnen] = useState<boolean>(false);
    // Volgorde van informatie: true is standaard (<).
	const [order, setOrder] = useState<boolean>(true);
    // Informatie over de headsets (geen JSON [deels] zodat het leven met de plaatjes een stuk makkelijker is).
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
    ]);

    const toggleHeadsetsMenu = () => {
        setShowHeadsetDropDown(!showHeadsetDropDown);
    }

    // Zet de pagina state naar de pagina die correspondeerd met de geklikte knop.
    const setCurrentPage = (page: string) => {
        setPage(page);
        setShowHeadsetDropDown(false);
        setShowBronnen(false);
        setOrder(false);
        document.title =
            page === null ? "DeHeadsetShop" :
            `${page} - DeHeadsetShop`;
    }
    //


    useEffect(() => {
        console.log("213.10.151.91");
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header
                    page={page}
                    setPage={setCurrentPage}
                    toggleHeadsetsMenu={toggleHeadsetsMenu}
                    showHeadsetsMenu={showHeadsetDropDown}
                />
                <HeadsetDropDown
                    setPage={setPage}
                    shown={showHeadsetDropDown}
                />

                <Routes>
                    <Route
                        path="/"
                        element={<Index/>}
                    />
                    <Route
                        path="/geschiedenis"
                        element=
                            {<Informatie
                                order={order}
                                setOrder={setOrder}
                                info="geschiedenis"
                            />}
                    />
                    <Route
                        path="/applicaties"
                        element=
                            {<Informatie
                                order={order}
                                setOrder={setOrder}
                                info="applicaties"
                            />}
                    />
                    <Route
                        path="/vergelijking"
                        element={<Vergelijking headsets={headsets}/>}
                    />
                    <Route
                        path="/headset"
                        element={<Headset headsets={headsets}/>}
                    />
                </Routes>

                <Bronnen
                    showBronnen={showBronnen}
                    setShowBronnen={setShowBronnen}
                />

                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
