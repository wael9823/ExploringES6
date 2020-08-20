const { obj, symbolReplacer, symbolReviver, str } = require("./JSONsymbols");

describe('Symbols in correlation with JSON', () => {
    it('Symbols as values of object properties can be sent using JSON', () => {
        expect(JSON.stringify(obj, symbolReplacer)).toBe( "{\"name\":\"lol\",\"mySymbol\":\"@@http://example.com/my_symbol@@\"}" )});
});
