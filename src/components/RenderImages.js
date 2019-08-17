import React from 'react';
import ImageCard from './ImageCard';
import {Link} from "react-router-dom";

export default class RenderImages extends React.Component {
    constructor(props) {
        super(props);
        this.author = props.author;
        this.url = props.url;
        this.description = props.description;
        this.image = {
            author: this.author,
            url: this.url,
            description: this.description
        };
    }

    render() {
        return (
            <Link to={{
                pathname: '/authorData',
                state: {
                    author: this.image.author,
                }
            }}><ImageCard image={this.image}/></Link>
        );
    }
}