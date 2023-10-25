import {useEffect, useState} from "react";
import "./IntroductionHeader.css"
export interface IntroductionHeaderProps {
    texts: string[];
    nameChangeInterval: number;
}

function IntroductionHeader(props: IntroductionHeaderProps) {
    const {texts, nameChangeInterval} = props;
    const [nameIndex, setNameIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (nameIndex < texts.length) ? nameIndex + 1 : 0;
            setNameIndex(newIndex);
        }, nameChangeInterval);

        return () => {
            clearInterval(interval);
        };
    }, [nameIndex])

    return (
        <div className={"typewriter"}>
            <h1>"{texts[nameIndex]}"</h1>
        </div>
    )
}

export default IntroductionHeader;