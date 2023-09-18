import "./ImageTrackPage.css"

export interface ImageContainerProps {
    src: string;
    draggable: boolean;
    objectPosition: number;
    className: string;
}

function ImageContainer(props: ImageContainerProps){

    const imageStyle = {
        objectPosition: `${props.objectPosition}% 50%`
    };

    return(
        <img className={"image"} src={props.src} draggable={props.draggable} style={imageStyle} />
    )
}

export default ImageContainer;