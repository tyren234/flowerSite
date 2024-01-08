import React, {useState} from 'react';
import "./ImageTrackPage.css";
import ImageContainer from "./ImageContainer";

function ImageTrackPage() {
    let mouseDownAt = 0;
    let previousPercentage = 0;
    let nextPercentage = 0;

    window.onmousedown = e => {
        mouseDownAt = e.clientX;
    }

    window.onmousemove = e => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - e.clientX
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100;
        nextPercentage = Math.max(Math.min(previousPercentage + percentage, 0), -100);

        const imageTrack = document.getElementById("image-track");
        if (imageTrack) {
            imageTrack.animate({
                transform: `translate(${nextPercentage}%, -50%)`
                }, {
                duration: 1200,
                fill: "forwards"
                }
            );

            for (const image of imageTrack.getElementsByClassName("image")){
                if (!(image instanceof HTMLElement)) return;
                image.animate({
                    objectPosition: `${nextPercentage + 100}% 50%`
                }, {
                    duration: 1200,
                    fill: "forwards"
                });
            }
        }
    }

    window.onmouseup = e => {
        mouseDownAt = 0;
        previousPercentage = nextPercentage;
    }

    return (
        <div>
            <div id={"image-track"}>
                <img className={"image"} src={require("../../images/photo-1.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-2.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-3.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-4.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-5.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-6.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-7.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-8.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-9.jpg")} draggable={false}/>
                <img className={"image"} src={require("../../images/photo-10.jpg")} draggable={false}/>
            </div>
        </div>
    );
}

export default ImageTrackPage;
