function outerFunc() {
    let numStorer;
    if (true) { 
        const rightAccess = function () {
        // console.log(num); logs 3
        numStorer = num;
        return num;
    };
   
    // This is the TDZ and
    // accessing myVar causes a ReferenceError

    let num = 3; 
    rightAccess(); // called outside TDZ
    }
    return numStorer;
    
}
console.log(outerFunc());
module.exports = outerFunc;