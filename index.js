const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const generatehtml = require('./dist/generatehtml')

// initialize a new employee object 
const newEmployee = new Employee();

// start application
newEmployee.getName();
