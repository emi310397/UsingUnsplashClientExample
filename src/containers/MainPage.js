import React from 'react';
import {Link} from "react-router-dom";

export default class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1 className={'header1'}>Search from Unsplash</h1>
                <Link to={{
                    pathname: '/searchImages'
                }}><p className={'simpleText'}>Images</p></Link>   |   <Link to={{
                    pathname: '/randomImage'
                }}><p className={'simpleText'}>Random image</p></Link>
            </div>
        );
    }
}
