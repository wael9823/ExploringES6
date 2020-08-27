function* displayValue(){
    let value = 0;
    while(true){
        value = yield;
        console.log('value is ' + value);
    }
}

let myNextValue = displayValue();

console.log(myNextValue.next(10));
console.log(myNextValue.next(20));
console.log(myNextValue.next(6));


