"use strict";

var controller = new UserController();
document.querySelector('#form').addEventListener('submit', controller.addUser.bind(controller));
