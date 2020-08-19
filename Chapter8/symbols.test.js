const { typeIs, isUnique, getSymbolProp} = require("./symbols");

describe('What symbols are and their properties', () => {
    it('Symbols are unique', () => {
        expect(isUnique(Symbol('first'),Symbol('first'))).toBeFalsy();
    });
    it('Symbol typeof is symbol', () => {
        expect(typeIs(Symbol())).toEqual("symbol");
    });
     it('A symbol can be property of an object', () => {
        expect(getSymbolProp()).toEqual("This is an object property whose key is a symbol");
    });
    
});