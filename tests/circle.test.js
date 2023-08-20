// Getting the Circle data for the test
const Circle = require('../lib/circle');

// Testing to make sure I get the expectedAnswer
describe('Circle', () => {
    describe('Circle shape', () => {
        it('should throw an error if it is not a circle shape', () => {
            const circleTest = new Circle();
            const expectedAnswer = `circle cx="150" cy="100" r="80"`;

            expect(circleTest.render()).toEqual(expectedAnswer);
        });
    });
});
//Pass