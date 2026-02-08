import React, {useEffect} from 'react';
import "./ImageTrackPage.css";

function ImageTrackPage() {
    let mouseDownAt = 0;
    let previousPercentage = 0;
    let nextPercentage = 0;

    // Detect mobile on component mount
    useEffect(() => {
        const checkMobile = () => {
            return window.innerWidth <= 768;
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseDown = (e: any) => {
        mouseDownAt = e.clientX;
    };

    const handleMouseMove = (e: any) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - e.clientX;
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
            });

            for (const image of imageTrack.getElementsByClassName("image")) {
                if (!(image instanceof HTMLElement)) return;
                image.animate({
                    objectPosition: `${nextPercentage + 100}% 50%`
                }, {
                    duration: 1200,
                    fill: "forwards"
                });
            }
        }
    };

    const handleMouseUp = (e: any) => {
        mouseDownAt = 0;
        previousPercentage = nextPercentage;
    };

    const handleTouchStart = (e: any) => {
        mouseDownAt = e.touches[0].clientX;
    };

    const handleTouchMove = (e: any) => {
        if (mouseDownAt === 0) return;

        const touchDelta = mouseDownAt - e.touches[0].clientX;
        // Use larger denominator for touch to slow down scrolling on mobile
        // This makes mobile scroll speed match desktop more closely
        const maxDelta = window.innerWidth;

        const percentage = (touchDelta / maxDelta) * -100;
        nextPercentage = Math.max(Math.min(previousPercentage + percentage, 0), -100);

        const imageTrack = document.getElementById("image-track");
        if (imageTrack) {
            imageTrack.style.transform = `translate(${nextPercentage}%, -50%)`;

            for (const image of imageTrack.getElementsByClassName("image")) {
                if (!(image instanceof HTMLElement)) return;
                image.style.objectPosition = `${nextPercentage + 100}% 50%`;
            }
        }
    };

    const handleTouchEnd = (e: any) => {
        mouseDownAt = 0;
        previousPercentage = nextPercentage;
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ width: '100%', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}
        >
            <div id={"image-track"}>
                {/* Row 1 */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-1.jpg")} draggable={false} alt="Gallery photo 1"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-2.jpg")} draggable={false} alt="Gallery photo 2"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-3.jpg")} draggable={false} alt="Gallery photo 3"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-4.jpg")} draggable={false} alt="Gallery photo 4"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-5.jpg")} draggable={false} alt="Gallery photo 5"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-6.jpg")} draggable={false} alt="Gallery photo 6"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-7.jpg")} draggable={false} alt="Gallery photo 7"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-8.jpg")} draggable={false} alt="Gallery photo 8"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-9.jpg")} draggable={false} alt="Gallery photo 9"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"image"} src={require("../../images/photo-10.jpg")} draggable={false} alt="Gallery photo 10"/>
                
                {/* Row 2 */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-1.jpg")} draggable={false} alt="Gallery photo 1"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-2.jpg")} draggable={false} alt="Gallery photo 2"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-3.jpg")} draggable={false} alt="Gallery photo 3"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-4.jpg")} draggable={false} alt="Gallery photo 4"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-5.jpg")} draggable={false} alt="Gallery photo 5"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-6.jpg")} draggable={false} alt="Gallery photo 6"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-7.jpg")} draggable={false} alt="Gallery photo 7"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-8.jpg")} draggable={false} alt="Gallery photo 8"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-9.jpg")} draggable={false} alt="Gallery photo 9"/> */}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/* <img className={"image"} src={require("../../images/photo-10.jpg")} draggable={false} alt="Gallery photo 10"/> */}
            </div>
        </div>
    );
}

export default ImageTrackPage;
