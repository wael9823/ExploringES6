const { hexToDec, decToHex } = require("./hexNumbers");

describe('Numbers in different systems', () => {
    it('Converting a hex number to decimal', () => {
        expect(hexToDec(0xfe)).toEqual("254");
    });
    it('Converting a decimal number to hex', () => {
        expect(decToHex(14)).toEqual("e");
    });
    
});