const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

function shapeMaker(selectShape) {
    const shape = selectShape;
    console.log(shape);

    if (shape === 'square') {
        const shape = new Square().render();
        console.log(shape);
        return shape;
    }
    else if (shape === 'circle') {
        const shape = new Circle().render();
        console.log(shape);
        return shape;
    }
    else if (shape === 'triangle') {
        const shape = new Triangle().render();
        console.log(shape);
        return shape;
    }
    else if (shape === undefined || selectShape === null){
        return new Error('selectShape is not any shape!');
    } 
}

module.exports = { shapeMaker };
