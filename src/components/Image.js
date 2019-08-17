import Author from './Author';

export default class Image {
    constructor(id, url, width, height, description, likes, author) {
        if (typeof author !== 'undefined'){
            this._author = new Author(author.id, author.username, author.name, author.location, author.links.self);
        }
        this._id = id;
        this._url = url;
        this._width = width;
        this._height = height;
        this._description = description;
        this._likes = likes;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get likes() {
        return this._likes;
    }

    set likes(value) {
        this._likes = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }
}