import styles from "./Sidebar.module.css";
import SidebarElement from "./SidebarElement";

export interface SidebarProps {
    sidebarToggled: boolean;
}
function Sidebar(props: SidebarProps) {
    const {sidebarToggled} = props;
    return (
        <aside className={`sidebar ${sidebarToggled ? styles.aside + " " + styles.visible : styles.aside}`}>
            <SidebarElement label={"Image"} icon={"../images/icons/sidebar/image-regular.svg"}/>
        </aside>
    )
}

export default Sidebar;