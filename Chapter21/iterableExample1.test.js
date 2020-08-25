const iterable = require("./iterableExample1");

let {[Symbol.iterator]:x}= iterable;
let nexy = x();

describe('Iterable returns a iterator object that has a method next', () => {
    it('The next method of iterator gives the next value hello', () => {
        expect(nexy.next()).toEqual({ value: 'hello', done: false });
    });   
    it('The next method of iterator gives the next value world', () => {
        expect(nexy.next()).toEqual({ value: 'world', done: false });
    });  
    it('The next method of iterator gives the next value undefined with done being true', () => {
        expect(nexy.next()).toEqual({ value: undefined, done: true });
    });  
});