// Parent class
class Shapes {
    constructor(triangle, circle, square) {
        this.triangle = triangle;
        this.circle = circle;
        this.square = square;
    }

    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;
