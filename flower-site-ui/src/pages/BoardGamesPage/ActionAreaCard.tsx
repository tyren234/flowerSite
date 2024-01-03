import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface ActionAreaCardProps {
    title: string;
    text: string;
    imagePath: string;
    altText: string;
}

export default function ActionAreaCard(props: ActionAreaCardProps) {
    const {title, text, imagePath, altText} = props;

    return (
        <Card sx={{ maxWidth: 500, maxHeight: 400}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={imagePath}
                    alt={altText}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}