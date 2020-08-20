const { varForLoop, letForloop } = require("./variablesLoop");

describe('Variables declared in loops have binding', () => {
    it('Var has only single binding', () => {
        expect(varForLoop()).toEqual([3, 3, 3]);
    });
    it('Let and const creates new binding for every iteration', () => {
        expect(letForloop()).toEqual([0, 1, 2]);
    });
});