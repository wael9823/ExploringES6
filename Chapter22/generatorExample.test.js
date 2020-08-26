const doubleGenerators = require("./generatorExample");

let myobj = { 
    name: 'wael',
    age: 21,
}

describe('Generators can be called inside generators using yield*', () => {
    it('We get a string from another generator while keys and values are being displayed', () => {
        expect(doubleGenerators(myobj)).toEqual([
            [ 'name', 'wael' ],
            'I am in between',
            [ 'age', 21 ],
            'I am in between'
          ]);
    });   
});