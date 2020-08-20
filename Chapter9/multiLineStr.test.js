const greetPerson = require("./multiLineStr");

describe('Symbols in correlation with JSON', () => {
    it('Symbols as values of object properties can be sent using JSON', () => {
        expect(greetPerson('Wael')).toBe(
`Hello Everyone!
My name is "WAEL".
It's nice to meet all of you.`)
    });
});
