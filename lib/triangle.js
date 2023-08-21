const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(triangle) {
        super(triangle);
    }

    render() {
        const triangle = `triangle points="0, 0 10, 10 20, 0"`;
        return triangle;
    }
    catch() {
        return new Error('Inside of the triangle class, and the shape is not a triangle');
    }
}

module.exports = Triangle;
