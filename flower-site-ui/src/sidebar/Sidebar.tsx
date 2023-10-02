import styles from "./Sidebar.module.css";
import SidebarElement from "./SidebarElement";
import React from "react";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

export interface SidebarProps {
    sidebarToggled: boolean;
}

function Sidebar(props: SidebarProps) {
    const {sidebarToggled} = props;
    return (
        <div>
            <link rel="stylesheet" type="text/css"
                  href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}/>
            <aside className={`sidebar ${sidebarToggled ? styles.aside + " " + styles.visible : styles.aside}`}>
                <SidebarElement label={"Home"} icon={solid("home")} link={"./"}/>
                <SidebarElement label={"Image gallery"} icon={solid("image")} link={"./images"}/>
                <SidebarElement label={"Fast typer"} icon={solid("keyboard")} link={"./typer"}/>
            </aside>
        </div>
    )
}

export default Sidebar;