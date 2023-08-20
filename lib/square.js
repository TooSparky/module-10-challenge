const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(square, color) {
        super(square);
        // this.color = color;
    }

    render() {
        //change 
        const square = `square x="10" y="10" width="30" height="30"`;
        return square;

    }
    catch() {
        return new Error('Inside of the square class, and the shape is not square');
    }    
}

module.exports = Square;
