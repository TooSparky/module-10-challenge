const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

function createSvg() {
    const text = enterText;
    const textColor = colorText;
    const shapeColor = colorShape;

    if (selectShape === 'square') {
        let shape = new Square().render();
    }
    else if (selectShape === 'circle') {
        let shape = new Circle().render();
    }
    else if (selectShape === 'triangle') {
        let shape = new Triangle().render();
    }
    else {
        return new Error('selectShape is not any shape!');
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} fill="${shapeColor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`;
}

module.exports = { createSvg };

//NEED TO FIGURE OUT SHAPE COLOR
//NEED TO FIGURE OUT TEXT
//NEED TO FIGURE OUT TEXT COLOR
