let arr1 = [];
let arr2 = [];

function varForLoop(){
for(var i=0; i <3; i++) {
    arr1.push(() => i);
    /*console.log('------------'); // Do un-comment and run this part to see working
    console.log(arr1[0]());
    if(i >= 1){
        console.log(arr1[1]());
        if(i >= 2) {
            console.log(arr1[2]());
        }
        console.log('------------');
    }*/ 
}
let varArr = arr1.map(x => x());
return varArr;
}

function letForloop(){
for(let i=0; i <3; i++) {
    arr2.push(() => i);
    /*console.log('------------'); // Do un-comment and run this part to see working
    console.log(arr2[0]());
    if(i >= 1){
        console.log(arr2[1]());
        if(i >= 2) {
            console.log(arr2[2]());
        }
        console.log('------------');
    }*/
}
let letArr = arr2.map(x => x());
return letArr;
}

module.exports.varForLoop = varForLoop;
module.exports.letForloop = letForloop;