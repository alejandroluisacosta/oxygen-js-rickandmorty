class Character {
    constructor(episode, gender, id, image, location, name, origin, species, status, url) {
        this._episode = episode;
        this._gender = gender;
        this._id = id;
        this._image = image;
        this._location = location;
        this._name = name;
        this._origin = origin;
        this._species = species;
        this._status = status;
        this._url = url;
    }
    get episode() {
        return this._episode;
    }

    get gender() {
        return this._gender;
    }

    get id() {
        return this._id;
    }

    get image() {
        return this._image;
    }

    get location() {
        return this._location;
    }

    get name() {
        return this._name;
    }

    get origin() {
        return this._origin;
    }

    get species() {
        return this._species;
    }

    get status() {
        return this._status;
    }

    get url() {
        return this._url;
    }
} 

export default Character;
