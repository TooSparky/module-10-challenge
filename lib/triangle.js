const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(triangle, color) {
        super(triangle);
        // this.color = color;
    }

    render() {
        //change
        const triangle = `triangle points="0, 0 10, 10 20, 0"`;
        if (selectShape === 'triangle') {
            console.log('inside of triangle and render()');
            return triangle;
        }
        else {
            return new Error('Inside of the triangle class, and the shape is not a triangle');
        }
    }
}

module.exports = Triangle;
