const { getObjProps, getKeyofSym, isNotUnique } = require("./symbolForExample");

describe('Symbols.for and its related concepts', () => {
    it('Symbols created using Symbols.for having same key are equal', () => {
        expect(isNotUnique(Symbol.for('first'),Symbol.for('first'))).toBeTruthy();
    });
    it('We can get the key of symbol using Symbol.keyFor', () => {
        expect(getKeyofSym(Symbol.for(123))).toEqual("123");
    });
     it('Object properties that are symbols are not shown in Object.keys', () => {
        expect(getObjProps()).toStrictEqual([ 'name', 'age']);
    });
    
});