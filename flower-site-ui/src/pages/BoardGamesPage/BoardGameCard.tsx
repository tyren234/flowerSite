import React, {useState} from 'react';
import {motion} from "framer-motion";
import "./BoardGamesPage.css";

export interface BoardGameCardProps {
    title: string;
    description: any;
    imagePath: string;
}

const BoardGameCard = (props: BoardGameCardProps) => {
    const {title, description, imagePath} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            transition={{layout: {duration: 1, type: "spring"}}}
            layout={"position"}
            className={"boardGamesCard"}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${imagePath})`
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <motion.h2
                layout={"position"}>{title}</motion.h2>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}>
                    {description}
                </motion.div>
            )}
        </motion.div>

    );
};

export default BoardGameCard;