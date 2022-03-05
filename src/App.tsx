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
import { browserName } from 'react-device-detect';
import headsetsJSON from  "./json/headsets.json";

const App = (): JSX.Element => {
    // Functioneert als een updated: zie header.tsx voor meer informatie hierover.
    const [page, setPage]: any = useState<string|null>("index");
    // State over of de headset drop down menu wel of niet zichtbaar moet zijn.
    const [showHeadsetDropDown, setShowHeadsetDropDown] = useState<boolean>(false);
    // State over of de bronnen zichtbaar moeten worden.
	const [showBronnen, setShowBronnen] = useState<boolean>(false);
    // Volgorde van informatie: true is standaard (<).
	const [order, setOrder] = useState<boolean>(true);
    const headsets = new Map<string, object>([
        ["htcvive", {
            ...headsetsJSON.htcvive,
            img: require("./img/headsets/HTCVive.png"),
            vid: require("./vids/HTCVive.mp4"),
        }],
        ["oculusrift", {
            ...headsetsJSON.oculusrift,
            img: require("./img/headsets/OculusRift.png"),
            vid: require("./vids/OculusRift.mp4"),
        }],
        ["razorosvr", {
            ...headsetsJSON.razorosvr,
            img: require("./img/headsets/RazorOSVR.png"),
            vid: require("./vids/RazorOSVR.mp4"),
        }],
        ["valveindex", {
            ...headsetsJSON.valveindex,
            img: require("./img/headsets/ValveIndex.png"),
            vid: require("./vids/ValveIndex.mp4"),
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
                    headsets={headsets}
                    setPage={setPage}
                    shown={showHeadsetDropDown}
                />

                <Routes>
                    <Route
                        path="/"
                        element={<Index/>}
                    />
                    <Route
                        path="/informatie"
                        element=
                            {<Informatie
                                order={order}
                                setOrder={setOrder}
                            />}
                    />
                    <Route
                        path="/headset"
                        element={<Headset
                            headsets={headsets}
                            setPage={setPage}
                            />}
                    />
                    <Route
                        path="/vergelijking"
                        element={<Vergelijking headsets={headsets}/>}
                    />
                    <Route
                        path="/bestelling"
                        element={<Bestelling headsets={headsets}/>}
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
