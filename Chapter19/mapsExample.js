let myObj1 = { name: 'First'};
let myObj2 = { name: 'second'};

let mymap = new Map();
mymap.set(myObj1,'one')
.set(myObj2,'two');

function returnKeys(){
    let arr = [];
    let i= 0;
    for(let key of mymap.keys()){
        arr[i] = key;
        i++;
    }
    console.log(arr);
    return arr;
}

function returnEntries(){
    let arr = [];
    let i= 0;
    for(let [key, value] of mymap.entries()){
        arr[i] = [key, value];
        i++;
    }
    console.log(arr);
    return arr;
}


module.exports = { returnKeys, returnEntries, mymap, };