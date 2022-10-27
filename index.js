const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const generatehtml = require('./dist/generatehtml')

function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => err ? console.error(err) : console.log('Generating HTML...'));
};

function init() {
    inquirer
        .prompt(
            questions
        )
        .then((response) => {
            const htmlinfo = (generatehtml(response));
            writeToFile('index.html', htmlinfo);
        }
        );
};

init();

// initialize a new employee object 
const newEmployee = new Employee();

// start application
newEmployee.getName();
