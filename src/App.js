import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from './containers/MainPage';
import SearchImages from './containers/SearchImages';
import SearchRandomImage from './containers/SearchRandomImage';
import AuthorData from './containers/AuthorData';
import './App.css';
import GetToken from "./containers/GetToken";
import GetOAuthCode from "./containers/GetOAuthCode";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/getOAuthCode" exact component={GetOAuthCode}/>
                    <Route path="/getToken" exact component={GetToken}/>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/searchImages" exact component={SearchImages}/>
                    <Route path="/randomImage" exact component={SearchRandomImage}/>
                    <Route path="/authorData" exact component={AuthorData}/>
                </Router>
            </div>
        );
    }
}

export default App;
