const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const generatehtml = require('./dist/generatehtml')

// initialize a new employee object 
const newEmployee = new Employee();

// start application
newEmployee.getName();


[
    {
        type: 'input',
        name: 'name',
        message: "Enter team manager's name."
    },
    {
        type: 'input',
        name: 'ID',
        message: "Enter your employee ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address."
    },
    {
        type: 'list',
        message: 'Add employee',
        name: 'role',
        choices: ['Engineer', 'Intern']
    },
]