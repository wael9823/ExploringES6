let myMap = new Map();
myMap.set(2,'First');
myMap.set(4,'Second');
myMap.set(6,'Third');


function mappingAMap() {
    let mappedMap = new Map( [...myMap] .map(([k, v]) => [k / 2, '_' + v]));
    console.log([...mappedMap]);
    return [...mappedMap];
}
mappingAMap();

let newMap = new Map([[8, 'Fourth'], [10, 'Fifth']]);

function combinedMap() {
    let comboMap = new Map([...myMap, ...newMap]);
    console.log([...comboMap]);
    return [...comboMap];
}

combinedMap();
module.exports = {mappingAMap, combinedMap};