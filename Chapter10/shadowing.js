function func(inner) {
    let num = 1;
    if (inner) {
        let num = 3; // shadows outer num because of block scoping
        console.log(num); // 3
        return num;
    }
    console.log(num); // 1
    return num;
}

function valueInblock(){
    return func(true);
}

function valueOutblock(){
    return func(false);
}

module.exports.valueInblock = valueInblock;
module.exports.valueOutblock = valueOutblock;
