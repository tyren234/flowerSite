import Button from "@mui/material/Button";
import styles from "./Navbar.module.css"

export interface NavbarProps {
    setSidebarToggled: (newState: boolean) => void;
}

function Navbar(props: NavbarProps) {
    const {setSidebarToggled} = props;

    const openSidebar = () => {
        setSidebarToggled(true);
    }

    return (
        <nav className={styles.navBar}>
            <Button onClick={openSidebar} className={"sidebar-toggle"} variant={"outlined"} color={"primary"}
                    size={"small"}>MENU</Button>
        </nav>
    );
}

export default Navbar;