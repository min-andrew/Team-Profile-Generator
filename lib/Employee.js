const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter team manager's name."
                }
            ])
            .then((response) => {

            });
        this.getId();
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'ID',
                    message: "Enter your employee ID."
                }
            ]);
        this.getEmail();
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter your email address."
                }
            ]);
        this.getRole();
    }

    getRole() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Add employee',
                    name: 'role',
                    choices: ['Engineer', 'Intern']
                }
            ])
            .then(response => {
                if (response.toLowerCase() === 'engineer') {
                    this.currentEmployee = new Engineer()
                } else if (response.toLowerCase() === 'intern') {
                    this.currentEmployee = new Intern()
                };
            });

    }

}

module.exports = Employee