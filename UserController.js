class UserController {
    constructor() {
        const $ = document.querySelector.bind(document)

        this._inputLogin = $('#inputLogin')
        this._inputPassword = $('#inputPassword')
        this._buttonSubmit = $('#buttonSubmit')

        this._users = new Users()
        this._userView = new UserView('#Users')
        this._userView.update(this._users)
    }

    newUser() {
        return new User(this._inputLogin.value, this._inputPassword.value)
    }


    addUser(event) {
        event.preventDefault()
        this._users.add(this.newUser())
        this._userView.update(this._users)
    }

    removeUser(user) {
        this._users.remove(user)
        this._userView.update(this._users)
    }
}