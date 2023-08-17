const inquirer = require('inquirer');

class CLI {
    constructor() {

    }

    addText() {
        return inquirer
            .prompt([
                {
                    name: 'addText',
                    type: 'input',
                    message: 'Enter up to 3 characters max for the logo'
                }
            ])
    }

    addTextColor() {
        return inquirer
            .prompt([
                {
                    name: 'addTextColor',
                    type: 'input',
                    message: 'Enter the color for the character text'
                }
            ])
    }

    addShape() {
        return inquirer
            .prompt([
                {
                    name: 'addShape',
                    type: 'input',
                    message: 'Choose the shape of the logo',
                    choices: [
                        'square',
                        'circle',
                        'triangle'
                    ]
                }
            ])
    }
}

module.exports = CLI;
