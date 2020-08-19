const { hexToDec, decToHex } = require("./hexNumbers");
const { normalAdd, epsEquAdd } = require("./epsilon");

describe('Decimal values other than base 2 are not properly represented in javascript', () => {
    it('0.1 + 0.2 != 0.3', () => {
        expect(normalAdd(0.1,0.2,0.3)).toBeFalsy();
    });
    it('We need to use epsilon to specify a reasonable margin of error', () => {
        expect(epsEquAdd(0.1,0.2,0.3)).toBeTruthy();
    });
    
});