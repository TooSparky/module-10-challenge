const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

class CLI {
    constructor() {
        this.array = [];
    }

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
                    message: 'Enter the color of the three characters'
                },
                {
                    name: 'selectShape',
                    type: 'input',
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
                    message: 'Pick a color for your shape'
                }
            ])
            .then(({ enterText, colorText, selectShape, colorShape }) => {
                this.array.push({ enterText, colorText, selectShape, colorShape });
            })
            .then(() => {
                return fs.writeFile(path.join(__dirname, '..', 'output', 'logo.svg'),
                createSvg(this.array));
            })
            .then(() => console.log('Created logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Sorry. Something went wrong.');
            });
    }
}

module.exports = CLI;
