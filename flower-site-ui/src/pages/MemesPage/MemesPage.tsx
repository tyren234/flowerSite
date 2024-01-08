import React from "react";
import style from "./MemesPage.module.css"

function MemesPage() {
    return (
        <div className={style.memesPage}>
            <section>
                <h1>Memes</h1>
            </section>
            <section>
                <p>Sometimes a truly remarkable idea pops up in our heads and when it happens to me, I like to make a
                    YouTube video of it. It oftentimes takes quite a lot of work, but I sincerely think that every
                    single minute spent on making these videos was worth it.</p>
                <p>Here is a collection of memes I made throughout the years. Enjoy! \(￣︶￣*\))</p>
            </section>
            <section>
                <ul className={style.memesList}>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/Krt2qMnYO-U"
                            srcDoc={"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Krt2qMnYO-U?autoplay=1><img src=https://img.youtube.com/vi/Krt2qMnYO-U/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"}
                            title="YouTube video player"

                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/SZ_2sgZna9I"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/SZ_2sgZna9I?autoplay=1><img src=https://img.youtube.com/vi/SZ_2sgZna9I/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/5nBKQZ8L5C8"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/5nBKQZ8L5C8?autoplay=1><img src=https://img.youtube.com/vi/5nBKQZ8L5C8/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/NvoMyc-mKLA"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/NvoMyc-mKLA?autoplay=1><img src=https://img.youtube.com/vi/NvoMyc-mKLA/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/w9aWztpNPFU"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/w9aWztpNPFU?autoplay=1><img src=https://img.youtube.com/vi/w9aWztpNPFU/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <p>
                            I made this one back when I used the light mode in every app I could. You can imagine that
                            it wasn't the most enjoyable thing in the world. By the way, I would recommend giving a shot
                            to the discord white mode. It's surprisingly bearable :D.
                        </p>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/DabColhTcuA"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/DabColhTcuA?autoplay=1><img src=https://img.youtube.com/vi/DabColhTcuA/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/In4bVjUPqck"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/In4bVjUPqck?autoplay=1><img src=https://img.youtube.com/vi/In4bVjUPqck/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/8CMN5TVsu7w"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/8CMN5TVsu7w?autoplay=1><img src=https://img.youtube.com/vi/8CMN5TVsu7w/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/k2hjOtIBQ1I"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/k2hjOtIBQ1I?autoplay=1><img src=https://img.youtube.com/vi/k2hjOtIBQ1I/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                    <li>
                        <iframe
                            className={style.ytVideo}
                            width="800" height="450"
                            src="https://www.youtube.com/embed/l7vZcv4EEBI"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/l7vZcv4EEBI?autoplay=1><img src=https://img.youtube.com/vi/l7vZcv4EEBI/hqdefault.jpg alt='Video Programming as the Friends intro'><span>▶</span></a>"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default MemesPage;
