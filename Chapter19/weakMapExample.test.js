const myName = require("./weakMapExample");

describe('Weak maps can be used to store private data', () => {
    it('Current name is wael', () => {
        expect(myName.name).toEqual('wael');
    });   
    it('new name is asim', () => {
        myName.changeName('asim');
        expect(myName.name).toEqual('asim');
    }); 
    it('removing the name key value pair from weak map', () => {
        myName.changeName('clear');
        expect(myName.name).toBeUndefined();
    }); 
});
