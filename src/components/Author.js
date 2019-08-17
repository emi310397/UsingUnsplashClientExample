export default class Author {
    constructor(id, username, name, location, profileImage) {
        this._id = id;
        this._username = username;
        this._name = name;
        this._location = location;
        this._profileImage = profileImage;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get profileImage() {
        return this._profileImage;
    }

    set profileImage(value) {
        this._profileImage = value;
    }
}