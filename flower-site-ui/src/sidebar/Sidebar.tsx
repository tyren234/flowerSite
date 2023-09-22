import styles from "./Sidebar.module.css";

export interface SidebarProps {
    sidebarToggled: boolean;
}
function Sidebar(props: SidebarProps) {
    const {sidebarToggled} = props;
    return (
        <aside className={`sidebar ${sidebarToggled ? styles.aside + " " + styles.visible : styles.aside}`}>
            <div>
                sidebar
            </div>
        </aside>
    )
}

export default Sidebar;