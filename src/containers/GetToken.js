import React from 'react';
import UnsplashClient from "../components/UnsplashClient";
import LoadingPage from '../components/LoadingPage';
import qs from "query-string";

export default class GetToken extends React.PureComponent {
    constructor(props) {
        super(props);
        this.code = null;
        this.token = null;
    }

    componentDidMount() {
        const objectCode = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
        this.code = objectCode.code;

        console.log(objectCode);
        this.getData();
    }

    getData = async () => {
        const uc = new UnsplashClient();
        const accessKey = uc.getAccessKey();
        const secretKey = uc.getSecretKey();

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.token);

        /*const endpoint = `https://unsplash.com/oauth/token?client_id=${accessKey}&client_secret=${secretKey}&code=${this.code}&redirect_uri=http://localhost:3000/home&grant_type=authorization_code`;

        const init = {
            method: 'POST',
            // headers: myHeaders,
        };*/

        const endpoint = `https://unsplash.com/oauth/token?`;

        const init = {
            method: 'POST',
            body: {
                client_id: accessKey,
                client_secret: secretKey,
                code: this.code,
                redirect_uri: 'http://localhost:3000/home',
                grant_type: 'authorization_code'
            }
        };

        const response = await fetch(endpoint, init);
        const data = await response.json();

        console.log(data);
    };

    render() {
        return (
            <div>
                <LoadingPage/>
            </div>
        );
    }
}