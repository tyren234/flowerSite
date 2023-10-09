import {useEffect, useState} from "react";

export interface IntroductionHeaderProps {
    texts: string[];
}

function IntroductionHeader(props: IntroductionHeaderProps) {
    const {texts} = props;
    const [nameIndex, setNameIndex] = useState<number>(0)
    const nameChangeInterval = 2000;

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
        <div>
            {texts[nameIndex]}
        </div>
    )
}

export default IntroductionHeader;