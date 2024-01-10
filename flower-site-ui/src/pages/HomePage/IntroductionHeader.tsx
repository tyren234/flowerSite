import {useEffect, useState} from "react";
import "./IntroductionHeader.css"

export interface IntroductionHeaderProps {
    texts: string[];
    letterDelay: number;
    waitBetweenWords: number;
}

function IntroductionHeader(props: IntroductionHeaderProps) {
    const {texts, letterDelay, waitBetweenWords} = props;
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);


    useEffect(() => {
        if (currentIndex < texts[currentTextIndex].length) {
            let timeout = setTimeout(() => {
                setCurrentIndex(prevIndex => prevIndex + 1);
                setCurrentText(prevText => prevText + texts[currentTextIndex][currentIndex]);
            }, letterDelay);
            return () => clearTimeout(timeout);
        } else {
            let timeout = setTimeout(() => {
                setCurrentTextIndex(prevIndex => prevIndex + 1 > texts.length - 1 ? 0 : prevIndex + 1)
                setCurrentIndex(0);
                setCurrentText('');
            }, waitBetweenWords)
            return () => clearTimeout(timeout);
        }

    }, [currentIndex, letterDelay, texts[currentTextIndex]]);

    return (
        <div className={"typewriter"}>
            <h1>"{currentText}"</h1>
        </div>
    )
}

export default IntroductionHeader;