import style from "./SidebarElement.module.css";

export interface SidebarElementProps {
    label: string;
    icon: any;
}

function SidebarElement(props: SidebarElementProps) {
    const {label, icon} = props;
    return (
        <div className={style.sidebarElement}>
            <img
                src={icon}/>
            {label}
        </div>
    )
}

export default SidebarElement;