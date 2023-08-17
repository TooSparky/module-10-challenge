class Shapes {
    constructor(triange, circle, square) {
        this.triange = triange;
        this.circle = circle;
        this.square = square;
    }

    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;
