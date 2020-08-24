const mySetOperations = require("./operationSets");

let setA = new Set(['banana', 'apple', 'orange']);
let setB = new Set();
setB.add('apple').add('mango').add('pear');

describe('Sets stores unique values only', () => {
    it('In union, Elements of both set A and set B are present', () => {
        expect(mySetOperations.doUnion(setA,setB)).toEqual(["banana", "apple", "orange", "mango", "pear"]);
    });   
    it('In intersection, Elements common to both set A and set B are present', () => {
        expect(mySetOperations.doIntersection(setA,setB)).toEqual(["apple"]);
    });  
    it('In difference Elements of only set A are present', () => {
        expect(mySetOperations.doDifference(setA,setB)).toEqual(["banana", "orange"]);
    });  
});