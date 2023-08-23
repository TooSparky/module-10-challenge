const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

// createSvg creates the SVG file including all parameters
function createSvg(enterText, colorText, selectShape, colorShape) {
    const text = enterText;
    const textColor = colorText;
    const shapeColor = colorShape;

    shapeMaker(selectShape);
    let shape = selectShape;
    
    // if (shape === 'square') {
    //     const shape = new Square().render();
    //     console.log(shape);
    // }
    // else if (shape === 'circle') {
    //     const shape = new Circle().render();
    //     console.log(shape);
    // }
    // else if (shape === 'triangle') {
    //     const shape = new Triangle().render();
    //     console.log(shape);
    // }
    // else if (shape === undefined || selectShape === null){
    //     return new Error('selectShape is not any shape!');
    // } 

    // SHAPE WILL NOT RETURN THE VALUE FROM IF / ELSE STATEMENT. DEFAULTS TO JUST THE SHAPE
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} fill="${shapeColor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`;
}

module.exports = { createSvg };
