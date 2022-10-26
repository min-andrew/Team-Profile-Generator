const inquirer = require('inquirer');

class Engineer {
    constructor(github) {
        this.github = github
    }

    getGithub() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter your Github web address."
                }
            ])
    }

    getRole() {

    }
}

module.exports = Engineer