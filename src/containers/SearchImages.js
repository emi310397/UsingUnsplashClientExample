import React from 'react';
import UnsplashClient from './../components/UnsplashClient';
import {Grid} from "@material-ui/core";
import RenderImages from "../components/RenderImages";

export default class SearchImage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            images: [],
        }
    }

    handleInputChange = event => {
        this.setState({
            searchValue: event.target.value
        })
    };

    getImages = async () => {
        let images;

        const unsplashClient = new UnsplashClient();

        images = await unsplashClient.search(this.state.searchValue);
        this.setState({
            images: images
        });

        this.renderImages();
    };

    renderImages = () => {
        if (typeof this.state.images !== 'undefined') {
            return this.state.images.map(image => {
                return (
                    <Grid item xs={3}>
                        <RenderImages key={image.id} author={image._author} url={image._url} description={image._description}/>
                    </Grid>
                )
            });
        }
    };

    render() {
        return (
            <div>
                <h1 className={'header1'}>Search Images</h1>
                <input type={'text'} onChange={this.handleInputChange}/>
                <button onClick={this.getImages}>Search</button>
                <br/>
                <br/>
                <Grid container spacing='1'>
                    {this.renderImages()}
                </Grid>
            </div>
        );
    }
}
