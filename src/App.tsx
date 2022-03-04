import React, { useEffect, useState } from 'react';
import './App.scss';
import Index from './components/index';
import Header from './components/header';
import Headset from './components/headset';
import Informatie from './components/informatie';
import Vergelijking from './components/vergelijking';
import Bronnen from './components/bronnen';
import HeadsetDropDown from './components/headsetdropdown';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Bestelling from './components/bestelling';
import { browserName } from "react-device-detect";

const getHeadsets = (): Map<string, object> => {
    return new Map<string, object>([
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
            img: require("./img/headsets/HTCVive.png"),
            vid: require("./vids/HTCVive.mp4"),
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
            img: require("./img/headsets/OculusRift.png"),
            vid: require("./vids/OculusRift.mp4"),
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
            img: require("./img/headsets/RazorOSVR.png"),
            vid: require("./vids/RazorOSVR.mp4"),
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
            img: require("./img/headsets/ValveIndex.png"),
            vid: require("./vids/ValveIndex.mp4"),
        }],
    ]);
}

const App = () => {
    // Functioneert als een updated: zie header.tsx voor meer informatie hierover.
    const [page, setPage]: any = useState<string|null>("index");
    // State over of de headset drop down menu wel of niet gelaten zien moet worden.
    const [showHeadsetDropDown, setShowHeadsetDropDown] = useState<boolean>(false);
    // State over of de bronnen gelaten zien moeten worden.
	const [showBronnen, setShowBronnen] = useState<boolean>(false);
    // Volgorde van informatie: true is standaard (<).
	const [order, setOrder] = useState<boolean>(true);
    // Informatie over de headsets (geen JSON [deels] zodat het leven met de plaatjes een stuk makkelijker is).

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
        if (browserName === "Edge")
            console.error("GEEN EDGE GEBRUIKEN!!!");
    }, []);

    return (
        <>
            {browserName === "Edge" ? <h1>Error 69420: Gelieve geen Edge gebruiken........</h1> : 
            <BrowserRouter>
                <Header
                    page={page}
                    setPage={setCurrentPage}
                    toggleHeadsetsMenu={toggleHeadsetsMenu}
                    showHeadsetsMenu={showHeadsetDropDown}
                />
                <HeadsetDropDown
                    headsets={getHeadsets()}
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
                        element={<Vergelijking headsets={getHeadsets()}/>}
                    />
                    <Route
                        path="/headset"
                        element={<Headset
                            headsets={getHeadsets()}
                            setPage={setPage}
                        />}
                    />
                    <Route
                        path="/bestelling"
                        element={<Bestelling headsets={getHeadsets()}/>}
                    />
                </Routes>

                {page === "geschiedenis" || page === "applicaties" ?
                <Bronnen
                    showBronnen={showBronnen}
                    setShowBronnen={setShowBronnen}
                /> : ""}

                {page === "vergelijking" ?
                <div className="pinned-bottom"><Footer/></div> : 
                <Footer/>}

            </BrowserRouter>}
        </>
    );
}

export default App;
