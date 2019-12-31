class Users {
    constructor() {
        this._users = []
    }

    add(user) {
        this._users.push(user)
    }

    remove(user) {
        this._users.splice(user, 1)
    }

    toArray() {
        return [].concat(this._users)
    }
}