import React from 'react';
import UnsplashClient from "../components/UnsplashClient";
import LoadingPage from '../components/LoadingPage';

export default class GetOAuthCode extends React.PureComponent {
    componentDidMount() {
        const uc = new UnsplashClient();
        const accessKey = uc.getAccessKey();
        const secretKey = uc.getSecretKey();
        const scopes = 'public+read_user+read_photos';

        window.location.assign(
            encodeURI(`https://unsplash.com/oauth/authorize?client_id=${accessKey}&scopes=${scopes}&response_type=code&redirect_uri=http://localhost:3000/getToken`)
        );
    }

    render() {
        return (
            <div>
                <LoadingPage/>
            </div>
        );
    }
}