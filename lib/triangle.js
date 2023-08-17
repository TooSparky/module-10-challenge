const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(triangle, color) {
        super(triangle);
        this.color = color;
    }

    render() {

    }
}

module.exports = Triangle;
