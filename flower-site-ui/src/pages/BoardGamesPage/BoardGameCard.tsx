import React from 'react';
import {motion} from "framer-motion";
import "./BoardGamesPage.css";
export interface BoardGameCardProps {
    title: string;
    description: string;
    imagePath: string;
}

const BoardGameCard = (props: BoardGameCardProps) => {
    const {title, description, imagePath} = props;

    return (
        // <div>
        //     <img src={imagePath} alt={title} />
        //     <div>
        //         <h2>{title}</h2>
        //         <p>{description}</p>
        //     </div>
        // </div>
        <div className={"boardGamesCard"}>
            <motion.div>
                <motion.h2>Tytuł</motion.h2>
                <motion.div>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BoardGameCard;