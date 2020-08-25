const objectEntries = require("./objectIterable");

let obj = { first: 'Wael', age: 21 };
let x= objectEntries(obj);

describe('We can iterate object properties by using an iterator function', () => {
    it('On iteration, we get the first property', () => {
        expect(x.next()).toEqual({ value: [ 'first', 'Wael' ] });
    });   
    it('On iteration, we get the second property', () => {
        expect(x.next()).toEqual({ value: [ 'age', 21 ] });
    });  
    it('On iteration we get done', () => {
        expect(x.next()).toEqual({ done: true });
    });  
});