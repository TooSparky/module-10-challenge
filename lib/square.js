const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(square, color) {
        super(square);
        // this.color = color;
    }

    render() {
        //change 
        const square = `square x="10" y="10" width="30" height="30"`;
        if(selectShape === 'square') {
            console.log('inside of square and render()');
            return square;
        }
        else {
            return new Error('Inside of the square class, and the shape is not square');
        }
    }
}

module.exports = Square;
