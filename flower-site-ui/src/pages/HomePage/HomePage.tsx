import "./HomePage.css";
import React from "react";
import {Link} from "react-router-dom";
import styles from "../../styles/links.module.css";
import IntroductionHeader from "./IntroductionHeader";

function HomePage() {

    return (
        <div className={"homePage"}>
            <div id="cards">
                <div className="card left">
                    <div className="card-content">
                        <section>
                            <p>Hi! I'm Tymon, a.k.a.</p>
                            <p><IntroductionHeader texts={["🌺 Flower 🌺", "Kwiatek", "Tymon", "GM", "tyren234", "Cwjetok"]} nameChangeInterval={5000} /></p>
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
                                install Ubuntu on my main PC (I use dual boot).
                            </p>
                        </section>
                    </div>
                </div>
                <div className="card right">
                    <div className="card-content">
                        <section>
                            <p>
                                Now I study Computer Science (Geoinformatics) at Warsaw University of Technology, give
                                tutoring in high school mathematics and look for a junior developer position.
                            </p>
                            <p>
                                I hope you'll find this site entertaining and worth your time :). (I really
                                recommend <Link className={styles.underlineLink} to={"/memes"}>memes</Link> tab)
                            </p>
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
                                <li>Java and Design Patterns (I developed in Java while working in Goldman Sachs)</li>
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
                                                                                to={"https://youtube.com/@osluchany"}>my
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
