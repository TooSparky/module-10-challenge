// Getting the Square data for the test
const Square = require('../lib/square');

// Testing to make sure I get the expectedAnswer
describe('Square', () => {
    describe('Square shape', () => {
        it('should throw an error if it is not a square shape', () => {
            const squareTest = new Square();
            const expectedAnswer = `square x="10" y="10" width="30" height="30"`;

            expect(squareTest.render()).toEqual(expectedAnswer);
        });
    });
});
//Pass