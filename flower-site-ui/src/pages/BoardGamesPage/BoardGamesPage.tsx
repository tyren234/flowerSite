import React from "react";
import {Link} from "react-router-dom";
import styles from "../../styles/links.module.css";
import "./BoardGamesPage.css";
import ActionAreaCard from "./ActionAreaCard";
import BoardGameCard from "./BoardGameCard";

function HomePage() {

    return (
        <div className={"boardGamesPage"}>
            <div id="boardGamesCards">
                {/*<ActionAreaCard title={"Root"}*/}
                {/*                text={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}*/}
                {/*                imagePath={require("./../../images/root.jpg")}*/}
                {/*                altText={"Root cover"}/>*/}

                <BoardGameCard title={"Root"}
                               description={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
                               imagePath={require("./../../images/root.jpg")}/>
            </div>
        </div>
    );
}

export default HomePage;
