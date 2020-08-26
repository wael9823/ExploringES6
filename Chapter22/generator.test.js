const { returnGenOut } = require("./generator");

let randomArr = [6, 3, 7, 3, 9, 0]

describe('Generators help us iterate in the manner we want', () => {
    it('On using the reverse generator we can use for of loop', () => {
        expect(returnGenOut(randomArr)).toEqual([0, 9, 3, 7, 3, 6]);
    });   
});