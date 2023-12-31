import styles from "./Sidebar.module.css";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CasinoIcon from '@mui/icons-material/Casino';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import {Link} from "react-router-dom";

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
                <List>
                    <Link to={"/"} className={styles.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon className={styles.icon}/>
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to={"/boardGames"} className={styles.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CasinoIcon className={styles.icon}/>
                                </ListItemIcon>
                                <ListItemText primary="Board Games"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to={"/memes"} className={styles.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArtTrackIcon className={styles.icon}/>
                                </ListItemIcon>
                                <ListItemText primary="Memes"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to={"/images"} className={styles.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ImageIcon className={styles.icon}/>
                                </ListItemIcon>
                                <ListItemText primary="Images"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to={"/typer"} className={styles.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <KeyboardIcon className={styles.icon}/>
                                </ListItemIcon>
                                <ListItemText primary="Train typing"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </aside>
        </div>
    )
}

export default Sidebar;