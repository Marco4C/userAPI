class User {
    constructor(login, password) {
        this._login = login
        this._password = password
        this._toDos= []
        this.toDo = {
            id:'',
            userId:'',
            title:'',
            description:''
        }
    }

}