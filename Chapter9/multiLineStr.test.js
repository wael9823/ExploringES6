const greetPerson = require("./multiLineStr");

describe('Backticks in JS helps us make template literals', () => {
    it('Template literals can store multiple lines and interpolate strings', () => {
        expect(greetPerson('Wael')).toBe(
`Hello Everyone!
My name is "WAEL".
It's nice to meet all of you.`)
    });
});
