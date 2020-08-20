const sayHello = require("./taggedTemplate");

describe('Tagged templates are function which take the strings and expressions as arguments', () => {
    it('Example of a tagged template ', () => {
        expect(sayHello`${name = 'Wael'} is pleased to meet you all.`).toBe(`He is pleased to meet you all. Wael is his name.`);
    });
});