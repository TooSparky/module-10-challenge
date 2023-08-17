const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(circle, color) {
        super(circle);
        this.color = color;
    }

    render() {

    }
}

module.exports = Circle;
