import React, {useState, useRef, useEffect} from 'react';
import ImageTrackPage from "./pages/ImageTrackPage/ImageTrackPage";
import Navbar from "./sidebar/Navbar";
import Sidebar2 from "./sidebar/Sidebar";

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
        <div>
            <ImageTrackPage/>
            <div ref={sidebarRef}>
                <Navbar setSidebarToggled={setSidebarToggled}/>
                <Sidebar2
                    sidebarToggled={sidebarToggled}
                />
            </div>
        </div>
    );
}

export default App;
