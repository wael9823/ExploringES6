const iterateSpider = require("./generatorMethod");

describe('Attaching an * as prefix before function definition makes it a generator method', () => {
    it('Generator methods can make objects iterable. This object iterates "spiderman is awesome".', () => {
        expect(iterateSpider()).toEqual(['Spiderman', 'is', 'awesome']);
    });
});