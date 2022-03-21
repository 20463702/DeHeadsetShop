import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/header';
import Headset from './components/headset';
import Informatie from './components/informatie';
import Vergelijking from './components/vergelijking';
import HeadsetDropDown from './components/headsetdropdown';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Bestelling from './components/bestelling';
import headsetsJSON from './json/headsets.json';
import IndexMain from './components/indexMain';
import IndexOverOns from './components/indexOverOns';

const App = (): JSX.Element => {
    const [page, setPage]: any = useState<string | null>("index");
    // State over of de headset drop down menu wel of niet zichtbaar moet zijn.
    const [showHeadsetDropDown, setShowHeadsetDropDown] = useState<boolean>(false);
    // State over of de bronnen zichtbaar moeten worden.
    const [showBronnen, setShowBronnen] = useState<boolean>(false);
    // Volgorde van informatie: true is standaard (<).
    const [order, setOrder] = useState<boolean>(true);
    // Informatie over de headsets van JSON naar een map.
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

    // Zet de pagina state naar de pagina die correspondeerd met de geklikte knop.
    const setCurrentPage = (page: string) => {
        setPage(page);
        setShowHeadsetDropDown(false);
        setShowBronnen(false);
        setOrder(false);
        document.title = page === null ? "DeHeadsetShop" : `${page} - DeHeadsetShop`;
    }

    useEffect(() => {
        console.log("213.10.151.91");
    }, []);

    return (
        <>
            <HashRouter>
                <Header
                    page={page}
                    setPage={setCurrentPage}
                    toggleHeadsetsMenu={() => { setShowHeadsetDropDown(!showHeadsetDropDown) }}
                    showHeadsetsMenu={showHeadsetDropDown}
                />
                <HeadsetDropDown
                    headsets={headsets}
                    shown={showHeadsetDropDown}
                    setPage={setCurrentPage}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<IndexMain />}
                    />
                    <Route
                        path="/index/overons"
                        element={<IndexOverOns />}
                    />
                    <Route
                        path="/informatie/:info"
                        element={<Informatie
                            order={order}
                            setOrder={setOrder}
                            showBronnen={showBronnen}
                            setShowBronnen={setShowBronnen}
                        />}
                    />
                    <Route
                        path="/headset/:name"
                        element={<Headset
                            headsets={headsets}
                            setPage={setCurrentPage}
                        />}
                    />
                    <Route
                        path="/vergelijking"
                        element={<Vergelijking headsets={headsets} />}
                    />
                    <Route
                        path="/bestelling/:name"
                        element={<Bestelling headsets={headsets} />}
                    />
                </Routes>

            </HashRouter>
        </>
    );
}

export default App;
