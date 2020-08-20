const { valueInblock, valueOutblock } = require("./shadowing");

describe('Shadowing happens when let is used to declare variables', () => {
    it('Value of variable num is 3 in block', () => {
        expect(valueInblock()).toBe(3);
    });
    it('Value of variable num is 1 out of block', () => {
        expect(valueOutblock()).toBe(1);
    });
});
