const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

function createSvg(enterText, colorText, selectShape, colorShape) {
    const text = enterText;
    const textColor = colorText;
    const shapeColor = colorShape;
    const shape = selectShape;

    // all return undefined
    console.log(shape);
    console.log(text);
    console.log(textColor);
    console.log(shapeColor);

    if (selectShape === 'square') {
        const shape = new Square().render();
    }
    else if (selectShape === 'circle') {
        const shape = new Circle().render();
    }
    else if (selectShape === 'triangle') {
        const shape = new Triangle().render();
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
