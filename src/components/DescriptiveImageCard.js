import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    createStyles({
        card: {
            maxWidth: 500,
            margin: "1em"
        },
    }),
);

export default function DescriptiveImageCard({image}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="No Image Found"
                    height="500"
                    image={image.url}
                    title={image.description}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {image.author.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {image.description}
                        <br/>
                        <br/>
                        Likes: {image.likes}
                        <br/>
                        Width: {image.width}    |   Height: {image.height}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
