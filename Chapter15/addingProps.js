let watchData = {
    brand: 'Tolex'
}

let modernWatch = {
    type: 'Digital',
    cost: 450,
    dialSize: 'medium',
    batteryQuartz: true
}

Object.assign(watchData,modernWatch, { colour: 'black', wasFoundedOn() { return new Date(989898000000);}})

function getTolexCost() {
    return watchData.cost;
}

function getTolexColour() {
    return watchData.colour;
}

function getTolexFounding() {
    let x = watchData.wasFoundedOn()
    console.log(x.toString());
    return x.toString();
}

function getNewWatch(brand){
    let newWatch = Object.assign({},watchData, {brand}); // Righthand side overrides previous properties
    return newWatch.brand; 
}
getTolexFounding();
module.exports = { getTolexCost, getTolexColour, getTolexFounding, getNewWatch };

