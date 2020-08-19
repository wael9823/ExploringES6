function isUnique(sym1, sym2) {
    return sym1 === sym2;
}

function typeIs(sym3) {
    return typeof sym3;
}

const symProp = Symbol('I am a property symbol for myObj');

let myObj = {};
myObj[symProp] = 'This is an object property whose key is a symbol';

function getSymbolProp() {
    return myObj[symProp];
}

module.exports.isUnique = isUnique;
module.exports.typeIs = typeIs;
module.exports.getSymbolProp = getSymbolProp;
