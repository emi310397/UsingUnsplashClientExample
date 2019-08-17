import Image from "./Image";

export default class UnsplashClient {
    constructor() {
        this.baseUrl = 'https://api.unsplash.com/';
        this.access_key = '1b4274d1de08258f77f54d95db527cd99315727acbbd9ea71e9c93eff4c66c2f';
        this.secret_key = '9e5efd8188a107ad1ae5e5abd5f30b3b5234f3c2ec79252f15ed8c1e6fe33d0c';
    }

    getAccessKey = () => {
        return this.access_key;
    };

    getSecretKey = () => {
        return this.secret_key;
    };

    search = async query => {
        const endpoint = `${this.baseUrl}search/photos?query=${query}&client_id=${this.access_key}`;

        const response = await fetch(endpoint);

        const imagesData = await response.json();

        return imagesData.results.map(image => {
            return new Image(
                image.id,
                image.urls.thumb,
                image.width,
                image.height,
                image.description,
                image.likes,
                image.user
            );
        });
    };

    getRandomImage = async () => {
        const endpoint = `${this.baseUrl}photos/random/?client_id=${this.access_key}`;

        const response = await fetch(endpoint);

        const imageData = await response.json();

        return new Image(
            imageData.id,
            imageData.urls.small,
            imageData.width,
            imageData.height,
            imageData.description,
            imageData.likes,
            imageData.user
        );
    };
}