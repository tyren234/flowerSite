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
                               imagePath={require("../../images/boardGames/root.webp")}/>

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
                               imagePath={require("../../images/boardGames/kings_dilemma.webp")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"Scythe 9/10"}
                               description={(
                                   <div>
                                       <p>Phenomenal game! I played it three times and immediately purchased it. The
                                           game is set in a world with an alternative history filled with steampunk
                                           inventions. Game comes with well-made figurines of different mechs (each
                                           fraction has it's own kind). Gameplay itself is pretty asymmetric. Players
                                           all strive to earn the most gold, but because every game is played with
                                           different set of costs, same actions may be more or less good value for
                                           money.</p>
                                       <p>In all fairness you can play a full game of Scythe in about 1.5h if players
                                           know what they are doing and it doesn't get boring even after many games. It
                                           is certainly one of my favourite games ever.
                                       </p>
                                       Pros:
                                       <ul>
                                           <li>Rapid gameplay</li>
                                           <li>Amazing manufacturing</li>
                                           <li>Good mix of single-player and multiplayer gameplay</li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li>Long setup time</li>
                                           <li>I lost a piece and now it's incomplete</li>
                                       </ul>
                                   </div>)}
                               imagePath={require("../../images/boardGames/jakub-rozalski-harvest-advantage-new-small.webp")}/>

                <BoardGameCard title={"Munchkin 7/10"}
                               description={(
                                   <div>
                                       <p>Oh Munchkin! What a game! If you haven't played Munchkin - it's high time you
                                           do. If you have played Munchkin before - it's high time you do again.
                                           (✿◠‿◠)</p>
                                       <p>Munchkin is amazing for its humor, easy gameplay, and the number of
                                           expansions available. You can find Munchkin themed after every major
                                           franchise these days. Star Wars, Conan, Avengers; you name it. What I
                                           appreciate most about this game is probably its potential for larger groups
                                           of people. It's ideal to play when you're with six people or have only 30
                                           minutes because a friend has to catch a bus. As for humor, I'll just put a
                                           picture of three random cards from the game and let it speak for itself.</p>
                                       <img className={"boardGamesCardImage"}
                                            src={require("../../images/boardGames/munchkin_cards.webp")}
                                            alt={"Three Munchkin playing cards"}
                                            width={"50%"}/>
                                       Pros:
                                       <ul>
                                           <li>Fast</li>
                                           <li>Funny</li>
                                           <li>Very surprising and straightforward</li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li>Gets boring</li>
                                           <li>Not so entertaining when you know the cards (can be fixed by buying
                                               expansions)
                                           </li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/munchkin_game_cover.webp")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"Dune: Imperium 9/10"}
                               description={(
                                   <div>
                                       <p>Dune, the desert planet is where the spice must flow! Very strategic game
                                           making you balance your resources, most important of which are your
                                           agents, to win battles and gain victory points. The more agents you have, the
                                           more actions you can perform. But it is costly to sway the swordmaster, so
                                           swordmaster or not to swordmaster, that is the question.</p>
                                       <p>Dune: Imperium is a really solid game by itself and really earns 9/10 rating
                                           in my opinion. But wait! There is more! As of now there are two official
                                           expansions for this game. Both great and both adding to the game. Some of my
                                           friends like one expansion more than the other, but to be honest they are
                                           both amazing.</p>
                                       Pros:
                                       <ul>
                                           <li>Addictive</li>
                                           <li>Seems fast-paced</li>
                                           <li>Strategic in a good way</li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li>Long gameplay</li>
                                           <li>Repetitive</li>
                                       </ul>

                                   </div>)}
                               imagePath={require("../../images/boardGames/dune_imperium.webp")}/>

                <BoardGameCard title={"Lord's of Waterdeep 8/10"}
                               description={(
                                   <div>
                                       <p>Similar to Dune: Imperium, Lords of Waterdeep is a game of limited resources,
                                           with the most crucial being your actions. Each round, players, embodying the
                                           Lords of Waterdeep, take turns placing their agents in various establishments
                                           around the famous city of Waterdeep. As the game is set in the Dungeons &
                                           Dragons world, the primary objective is to complete as many quests as
                                           possible. Naturally, akin to many similar games (such as mentioned Dune), you
                                           can conspire
                                           against fellow players using intrigue cards that enable you to subtly alter
                                           the current state of the game, and maybe even tip the scales in your
                                           favor.</p>
                                       Pros:
                                       <ul>
                                           <li>Resources and actions management</li>
                                           <li>Well designed intrigue cards</li>
                                           <li>Dungeons & Dragons universe</li>
                                       </ul>
                                   </div>)}
                               imagePath={require("../../images/boardGames/lords_of_waterdeep.webp")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"7 Wonders 6/10"}
                               description={(
                                   <div>
                                       <p>Original 7 Wonders game, although very popular, is not my favourite. It's OK,
                                           it isn't boring immediately, but it doesn't really fit my tastes. If possible
                                           I would rather play any other 7 Wonders alternative, but I must admit that I
                                           never tried expansions for this Game. Personally I really recommend you try
                                           out the game, but don't buy it before you play a couple of times.</p>
                                   </div>)}
                               imagePath={require("../../images/boardGames/7wonders.webp")}/>
                <BoardGameCard title={"7 Wonders Duel 8/10"}
                               description={(
                                   <div>
                                       <p>While the original 7 Wonders game may not have been very captivating in my
                                           opinion, its
                                           popularity paved the way for the creation of this masterpiece. This
                                           two-person versus game offers a simple and reasonably quick way to settle a
                                           dispute. Two players compete for glory as they strive to outmaneuver each
                                           other, aiming to bring their opponent to the sand, whether financially,
                                           militarily, or scientifically. I would highly recommend this game without
                                           hesitation.</p>
                                       <p>My favourite strategy is to gather all scientific symbols as they allow you to
                                           win the game without really investing in anything else in the game, but you
                                           can also fight or just gather victory points as you go through the game. I
                                           really encourage you to try this game out!</p>
                                       Pros:
                                       <ul>
                                           <li>Fast</li>
                                           <li>Easy to learn</li>
                                       </ul>
                                   </div>)}
                               imagePath={require("../../images/boardGames/7wonders_duel.webp")}/>

                <div className={"break"}></div>

                <BoardGameCard title={"7 Wonders Architects 7/10"}
                               description={(
                                   <div>
                                       <p>This game is truly amazing. Its simplicity makes it accessible, even for those
                                           who rarely play board games. Each turn involves drawing a card from one
                                           of three decks, and the rest happens automatically. While the lack of choices
                                           may introduce randomness, it adds to the overall enjoyment and makes the game
                                           easier for newcomers.
                                           Despite its simplicity, the game provides a ton of fun, making it great
                                           choice to play with friends during parties.</p>
                                       Pros:
                                       <ul>
                                           <li>Easy rules</li>
                                           <li>Quick gameplay</li>
                                       </ul>
                                       Cons:
                                       <ul>
                                           <li>Random</li>
                                           <li>Repetitive after you've played all 7 wonders</li>
                                       </ul>
                                   </div>)}
                               imagePath={require("../../images/boardGames/7wonders_architects.webp")}/>


            </div>
        </div>
    );
}

export default BoardGamesPage;
