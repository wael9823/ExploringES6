let yieldMyString = function* (){
    yield 'I am in between';
}

function* objGenerator(anObj) {
    let keys = Reflect.ownKeys(anObj);

    for(let key of keys){
        yield [key,anObj[key]];
        yield* yieldMyString();
    }
}

function doubleGenerators(obj){
    let generator = objGenerator(obj);
    let arr =[], i=0;
    for(let x of generator){
        arr[i] = x;
        i++;
    }
    return arr;
}

module.exports = doubleGenerators;