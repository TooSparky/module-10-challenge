const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

// createSvg creates the SVG file including all parameters
function createSvg(enterText, colorText, selectShape, colorShape) {
    const text = enterText;
    const textColor = colorText;
    const shapeColor = colorShape;

    let shape = selectShape;
    let displayShape = '';
    
    if (shape === 'square') {
      displayShape = new Square().render();
    }
    else if (shape === 'circle') {
      displayShape = new Circle().render();
    }
    else if (shape === 'triangle') {
      displayShape = new Triangle().render();
    }
    else if (shape === undefined || selectShape === null){
        return new Error('selectShape is not any shape!');
    } 

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${displayShape} fill="${shapeColor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`;
}

module.exports = { createSvg };
