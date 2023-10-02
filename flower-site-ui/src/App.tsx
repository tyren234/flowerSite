import React, {useEffect, useRef, useState} from 'react';
import ImageTrackPage from "./pages/ImageTrackPage/ImageTrackPage";
import Navbar from "./sidebar/Navbar";
import Sidebar2 from "./sidebar/Sidebar";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import FastTyperPage from "./pages/FastTyperPage/FastTyperPage";
import NoPage from "./pages/NoPage/NoPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    const [sidebarToggled, setSidebarToggled] = useState<boolean>(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handler(e: any) {
            if (sidebarRef.current) {
                if (!e.target.classList.contains("sidebar")
                    && !e.target.classList.contains("sidebar-toggle")) {
                    setSidebarToggled(false);
                }
            }
        }

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        }
    });

    return (
        <div className={"App"}>
            <div className={"Page"}>
                <Routes>
                    <Route path="/images" element={<ImageTrackPage/>}/>
                    <Route path="/typer" element={<FastTyperPage/>}/>
                    <Route path="/404" element={<NoPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
            <div ref={sidebarRef}>
                <Navbar setSidebarToggled={setSidebarToggled}/>
                <Sidebar2
                    sidebarToggled={sidebarToggled}
                />
            </div>
        </div>
    )
        ;
}

export default App;
