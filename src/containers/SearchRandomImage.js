import React from 'react';
import UnsplashClient from './../components/UnsplashClient';
import Image from './../components/Image';
import DescriptiveImageCard from "../components/DescriptiveImageCard";
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";

export default class SearchRandomImage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: new Image(
                '',
            ),
        }
    }

    getImage = async () => {
        let image;

        const unsplashClient = new UnsplashClient();

        image = await unsplashClient.getRandomImage();

        this.setState({
            image: image
        });

        this.renderImage();
    };

    renderImage = () => {
        let image;
        if (this.state.image.id !== '') {
            image = this.state.image;
            return <Grid item xs={12}>
                <Link to={{
                    pathname: '/authorData',
                    state: {
                        author: image.author,
                    }
                }}><DescriptiveImageCard image={image}/></Link>
            </Grid>
        }
    };

    render() {
        return (
            <div>
                <h1 className={'header1'}>Search Random Image</h1>
                <button onClick={this.getImage}>Search</button>
                <br/>
                <br/>
                <Grid container justify={"center"}>
                    {this.renderImage()}
                </Grid>
            </div>
        );
    }
}
