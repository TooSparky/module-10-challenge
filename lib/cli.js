const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');
const { createSvg } = require('./document');

class CLI {
    constructor(){}

    run() {
        return inquirer 
            .prompt([
                {
                    name: 'enterText',
                    type: 'input',
                    message: 'Enter up to three characters to be inside your logo'
                },
                {
                    name: 'colorText',
                    type: 'input', 
                    message: 'Enter a color for the three characters'
                },
                {
                    name: 'selectShape',
                    type: 'list',
                    message: 'Choose a shape',
                    choices: [
                        'square',
                        'circle',
                        'triangle'
                    ],
                },
                {
                    name: 'colorShape',
                    type: 'input',
                    message: 'Enter a color for your shape'
                }
            ])
            .then(({enterText, colorText, selectShape, colorShape}) => {
                return writeFile(join(__dirname, '..', 'output', 'logo.svg'),
                createSvg(enterText, colorText, selectShape, colorShape).toString());
            })
            .then(() => console.log('Created logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Sorry. Something went wrong.');
            });
    }
}

module.exports = CLI;
