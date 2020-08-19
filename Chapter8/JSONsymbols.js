function symbolReplacer(key, value) {
    if (typeof value === 'symbol') {
     return '@@' + Symbol.keyFor(value) + '@@';
    }
    return value;
}

const MY_SYMBOL = Symbol.for('http://example.com/my_symbol');
let obj = { [MY_SYMBOL]: 123,  // Symbols as keys are ignored by JSON.stringify
name: 'lol',
mySymbol: MY_SYMBOL};

let str = JSON.stringify(obj, symbolReplacer);
console.log(str);

const REGEX_SYMBOL_STRING = /^@@(.*)@@$/;
function symbolReviver(key, value) {
    if (typeof value === 'string') {
        let match = REGEX_SYMBOL_STRING.test(value);
        if (match) {
            let symbolKey = match[1];
            return Symbol.for(symbolKey);
        }
    }
return value;
}

let parsed = JSON.parse(str, symbolReviver);
console.log(parsed);

module.exports.MY_SYMBOL = MY_SYMBOL;
module.exports.obj = obj;
module.exports.symbolReplacer = symbolReplacer;
module.exports.str = str;
module.exports.REGEX_SYMBOL_STRING = REGEX_SYMBOL_STRING;
module.exports.symbolReviver = symbolReviver;