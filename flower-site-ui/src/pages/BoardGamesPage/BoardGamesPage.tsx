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

                                       Pros:
                                       <ul>
                                           <li>Phenomenal gameplay</li>
                                           <li>Replay value, deeply asymmetric game means it is much different every
                                               time you play
                                           </li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li>Can anger people. Our group stopped playing root for ~3 months because we
                                               were tilted :D
                                           </li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/root.jpg")}/>

                <BoardGameCard title={"King's Dilemma 7/10"}
                               description={(
                                   <div>
                                       <p>King's Dilemma is book-like, legacy board game. Together with other players
                                           (up to 5 total) you create the high council of imaginary kingdom. It is up to
                                           you to decide on most urgent matters concerning the kingdom and it is your
                                           duty to suffer the consequences of your choices. King's Dilemma has simple
                                           rules and is moderately quick to set up. Gameplay consists of reading the
                                           dilemma card presented before the council and deciding what path will the
                                           kingdom take. </p>
                                       <p>Despite uncomplicated mechanics King's Dilemma is really exciting with a
                                           well-written story. It being legacy game only adds to the immersion and the
                                           feeling that you are actually steering the kingdom.</p>

                                       Pros:
                                       <ul>
                                           <li>Simple rules, but ton of fun</li>
                                           <li>Long gameplay (took us about 40 hours of playing, 16 games to finish the
                                               story)
                                           </li>
                                           <li>Well-written tale</li>
                                           <li>Your progress is saved throughout the games</li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li>Playable only once (legacy game)</li>
                                           <li>Didn't feel satisfied after the ending</li>
                                           <li>You have to play with the same group of people for the duration.</li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/kings_dilemma.jpg")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"Scythe 9/10"}
                               description={(
                                   <div>
                                       <p></p>
                                       Pros:
                                       <ul>
                                           <li></li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li></li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/jakub-rozalski-harvest-advantage-new-small.jpeg")}/>

                <BoardGameCard title={"Munchkin 7/10"}
                               description={(
                                   <div>
                                       <p></p>
                                       Pros:
                                       <ul>
                                           <li></li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li></li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/munchkin_game_cover.jpg")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"Dune: Imperium 9/10"}
                               description={(
                                   <div>
                                       <p></p>
                                       Pros:
                                       <ul>
                                           <li></li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li></li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/dune_imperium.jpg")}/>

                <BoardGameCard title={"Lord's of Waterdeep 8/10"}
                               description={(
                                   <div>
                                       <p></p>
                                       Pros:
                                       <ul>
                                           <li></li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li></li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/lords_of_waterdeep.jpg")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"7 Wonders 6/10"}
                               description={(
                                   <div>
                                       <p></p>
                                       Pros:
                                       <ul>
                                           <li></li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li></li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/7wonders.jpg")}/>

                <BoardGameCard title={"7 Wonders Duel 8/10"}
                               description={(
                                   <div>
                                       <p></p>
                                       Pros:
                                       <ul>
                                           <li></li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li></li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/7wonders_duel.jpg")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"7 Wonders Architects 7/10"}
                               description={(
                                   <div>
                                       <p></p>
                                       Pros:
                                       <ul>
                                           <li></li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li></li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/7wonders_architects.jpg")}/>


            </div>
        </div>
    );
}

export default BoardGamesPage;
