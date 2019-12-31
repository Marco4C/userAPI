class UserView {

    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }

    update(model) {
        this.elemento.innerHTML = this.template(model);
    }

    template(model) {
        console.log(model);
        return `
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"">Usuario</th>
                        <th scope="col"">Senha</th>
                        <th scope="col"">-</th>
                    </tr>
                </thead>
                <tbody id="tableUsers">
                    ${model.toArray().map(user => {
                        return `
                        <tr">
                            <td scope="row">${user._login}</td>
                            <td>${user._password}</td>
                            ${/*todo*/''}
                            <td><input type="button" value="Remove" class="btn btn-danger"></td>
                        </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }
}