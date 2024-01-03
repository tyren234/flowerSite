import React from "react";
import "./BoardGamesPage.css";
import BoardGameCard from "./BoardGameCard";

function BoardGamesPage() {
    return (
        <div className={"boardGamesPage"}>
            <div className="boardGamesCards">
                <BoardGameCard title={"Root 8/10"}
                               description={(
                                   <div>
                                       <p>Root is a captivating and strategic board game that can really suck you in. ;)
                                           The game is set in a charming woodland filled with
                                           animal factions fighting for control and dominance. The asymmetric gameplay,
                                           where
                                           each faction has entirely different abilities and objectives, adds depth and
                                           replay value. The
                                           game
                                           mechanics are intricate yet accessible, requiring players to carefully plan
                                           their
                                           moves and
                                           adapt to the ever-changing dynamics of the forest. </p>
                                       <p>
                                           You can play as the industrial power, Marquise de Cat, that has taken over
                                           the forest, or as the
                                           fallen kingdom of eagles, Eyrie Dynasties, trying to take back what is
                                           rightfully yours. Perhaps
                                           you will attempt to help the common folk of the forest and lead a rebellion
                                           as the Woodland
                                           Alliance, or strive to achieve personal victories by playing solo against
                                           these powerful factions as the
                                           Vagabond.</p>
                                   </div>)}
                               imagePath={require("./../../images/root.jpg")}/>
            </div>
        </div>
    );
}

export default BoardGamesPage;
