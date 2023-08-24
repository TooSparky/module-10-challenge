const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(triangle) {
        super(triangle);
    }

    render() {
        const triangle = `polygon points="150, 25 50, 150 250, 150"`;
        return triangle;
    }
    catch() {
        return new Error('Inside of the triangle class, and the shape is not a triangle');
    }
}

module.exports = Triangle;
