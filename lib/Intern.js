const inquirer = require('inquirer');

class Intern {
    constructor(school) {
        this.school = school
    }

    getSchool() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter your school."
                }
            ])
    }

    getRole() {

    }
}

module.exports = Intern