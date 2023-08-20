// Getting the Triangle data for the test
const Triangle = require('../lib/triangle');

// Testing to make sure I get the expectedAnswer
describe('Triangle', () => {
    describe('Triangle shape', () => {
        it('should throw an error if it is not a triangle shape', () => {
            const triangleTest = new Triangle();
            const expectedAnswer = `triangle points="0, 0 10, 10 20, 0"`;

            expect(triangleTest.render()).toEqual(expectedAnswer);
        });
    });
});
//Pass