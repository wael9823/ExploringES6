const { compareThis, reverseStr } = require("./unicodeEsc");


describe('Changes in unicode properties in ES6 ', () => {
    it('unicode code point escapes', () => {
        expect(compareThis('\uD83D\uDE80', '\u{1F680}')).toBeTruthy();
    });
    it('Iteration helps reversing strings with non BMP code points', () => {
        expect(reverseStr('a\uD83D\uDE00b')).toEqual('b\uD83D\uDE00a');
    });
    
});