function isNotUnique(sym1, sym2) {
    return sym1 === sym2;
}

function getKeyofSym(sym3) {
    return Symbol.keyFor(sym3);
}

const zodiacSym = Symbol();

const myObj = {
    name: 'wael',
    age: '21',
    [zodiacSym]: 'Capricorn'
}

function getObjProps() {
    return Object.keys(myObj);
}

module.exports.isNotUnique = isNotUnique;
module.exports.getKeyofSym = getKeyofSym;
module.exports.getObjProps = getObjProps;