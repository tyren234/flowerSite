import style from "./SidebarElement.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";

export interface SidebarElementProps {
    label: string;
    link: string;
    icon: any;
}

function SidebarElement(props: SidebarElementProps) {
    const {label, icon, link} = props;
    return (
        <div className={style.sidebarElement}>
            <FontAwesomeIcon icon={icon}/>
            <Link className={style.sidebarLabel} to={link}>{label}</Link>
        </div>
    )
}

export default SidebarElement;