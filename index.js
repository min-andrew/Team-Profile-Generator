const inquirer = require('inquirer');
const fs = require('fs');
const generatehtml = require('./lib/Generatehtml')

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