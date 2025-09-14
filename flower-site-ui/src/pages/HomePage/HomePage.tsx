import "./HomePage.css";
import React from "react";
import {Link} from "react-router-dom";
import styles from "../../styles/links.module.css";
import IntroductionHeader from "./IntroductionHeader";

function HomePage() {

    return (
        <div className={"homePage"}>
            <div id={"welcomeScreenContainer"}>
                <div id={"welcomeScreen"}>
                    <h1>Tymon<br />Kwiatkowski</h1>
                </div>
                <div id={"foregroundWelcomeImage"}></div>
            </div>
            <div id="cards">
                <div className="card left">
                    <div className="card-content">
                    <section>
                            <p>Hi! I'm Tymon, a.k.a.</p>
                            <p><IntroductionHeader
                                texts={["🌺 Flower 🌺", "Kwiatek", "Tymon Kwiatkowski", "Dungeon Master", "tyren234", "Цветок"]}
                                letterDelay={150}
                                waitBetweenWords={2000}
                                /></p>
                            <p>Be sure to visit
                                <Link className={styles.underlineLink} to={"/boardGames"}> board games</Link>,
                                <Link className={styles.underlineLink} to={"/images"}> images</Link> or
                                <Link className={styles.underlineLink} to={"/memes"}> memes</Link> tab</p>
                        </section>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <section>
                            <p>
                                Back in the middle school, I picked up coding and slowly built up confidence with mostly
                                C++. In senior year of high school and first year of university, I started really
                                focusing on programming in C++ and Python. It was also then that I finally decided to
                                install Ubuntu on my main PC.
                            </p>
                        </section>
                    </div>
                </div>
                <div className="card right">
                    <div className="card-content">
                        <section>
                            <p>
                                I studied Computer Science (Geoinformatics) at Warsaw University of Technology. Now I work as a software developer and I look forward to getting a master degree in computer science.
                            </p>
                            <p>
                                I hope you'll find this site entertaining and you learn something about me :). (I really
                                recommend <Link className={styles.underlineLink} to={"/memes"}>memes</Link> tab)
                            </p>
                        </section>
                    </div>
                </div>
                <div className="card left">
                    <div className="card-content">
                    <section>
                            <p>Some of my projects</p>
                            <ul style={{textAlign: "left", lineHeight: "1.5rem"}}>
                                <li>
                                    <Link className={styles.underlineLink}  to={"https://github.com/tyren234/sunflower"} target={"_blank"}>Sunflower</Link> -
                                    a discord bot that lets you save your message to local filesystem. I run this on my home server to make sure my notes are backed up.
                                </li> 
                                <li>
                                    <Link className={styles.underlineLink} to={"https://github.com/tyren234/satellites-position-visualiser"} target={"_blank"}>Satellite position visualiser</Link> -
                                    visualisation app showing you precise locations of multiple satellites from many different satellite systems.
                                </li>
                                <li>
                                    <Link className={styles.underlineLink} to={"https://github.com/tyren234/fantasy-leaflet-map"} target={"_blank"}>Fantasy world map</Link> -
                                    interactive web map I made for my D&D campaign. You can see it <Link className={styles.underlineLink} to={"https://tyren234.github.io/fantasy-leaflet-map/"} target={"_blank"}>here</Link>.
                                </li>
                            </ul>
                    </section>
                </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <section>
                            <p>
                                My interests:
                            </p>
                            <ul style={{textAlign: "left", lineHeight: "1.5rem"}}>
                                <li>Java and Design Patterns (I use Java at work)</li>
                                <li>C++ (I started here, it was my primary language at the university. I took part in
                                    Nokia Academy for C++ developers in autumn 2022)
                                </li>
                                <li>Python (<Link className={styles.underlineLink}
                                                  to={"https://github.com/tyren234/pythongit/tree/main/blind75"}
                                                  target={"_blank"}>Blind75
                                    (on LeetCode)</Link>, Selenium, Pandas, Numpy, Tensorflow)
                                </li>
                                <li>Typescript, Material UI, HTML, CSS, JS (my site and some extensions)
                                </li>
                                <li>C# (Unity games)</li>
                                <li>Cybersecurity (<Link className={styles.underlineLink}
                                                         to={"https://tryhackme.com/p/tyren234"}
                                                         target="_blank">trychackme.com</Link>)
                                </li>
                                <li>Bash and Linux (when I had to install Ubuntu and write my scripts for it)</li>
                            </ul>

                        </section>
                    </div>
                </div>
                <div className="card left">
                    <div className="card-content">
                        <section>
                            <p>
                                My Hobbies
                                <ul className={"simpleList"}>
                                    <li>Play board games of any kind 🎲 (see <Link className={styles.underlineLink}
                                                                                  to={"./boardGames"}>board games</Link>)
                                    </li>
                                    <li>Play tabletop RPG with friends 🏹️</li>
                                    <li>Play computer games 🎮</li>
                                    <li>Play piano 🎹 and guitar ️🎸</li>
                                    <li>Read and record reading poetry 📖 (<Link className={styles.underlineLink}
                                                                                to={"https://youtube.com/@osluchany"}
                                                                                target="_blank">my
                                        yt channel</Link>)
                                    </li>
                                </ul>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
