const { objProps, newObjProps } = require("./constObject");

describe('Const variables have to be initialized during declartion and cant be reassigned', () => {
    it('Properties of a newly created const variable of Object', () => {
        expect(objProps()).toEqual({});
    });
    it('Objects are mutable even if they are declared using const', () => {
        expect(newObjProps()).toEqual({ name: 'Wael', age: 21 });
    });
});