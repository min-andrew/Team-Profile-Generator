const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor(name) {
        this.name = name
    }
    constructor(id) {
        this.id = id
    }
    constructor(email) {
        this.email = email
    }

    getName() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter team manager's name."
                }
            ])
    }

    getId() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'ID',
                    message: "Enter your employee ID."
                }
            ])
    }

    getEmail() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter your email address."
                }
            ])
    }

    getRole() {

    }

}

module.exports = Employee