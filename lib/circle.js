const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(circle, color) {
        super(circle);
        // this.color = color;
    }

    render() {
        //change
        const circle = `circle cx="150" cy="100" r="80"`;
        if(selectShape === 'circle') {
            console.log('inside of circle and render()');
            return circle;
        }
        else {
            return new Error('Inside of the circle class, and the shape is not a circle');
        }
    }
}

module.exports = Circle;
