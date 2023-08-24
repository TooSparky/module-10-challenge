const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(square) {
        super(square);
    }

    render() {
        const square = `rect x="100" y="50" width="100" height="100"`;
        return square;

    }
    catch() {
        return new Error('Inside of the square class, and the shape is not square');
    }    
}

module.exports = Square;
