function* myGenerator(anArr){
    anArr = anArr.reverse();
    for(let i=0; i<anArr.length; i++){
        yield anArr[i];
    }
}

var myArray = [1, 2, 3, 4, 5];

returnGenOut(myArray);

function returnGenOut(arr){
    let revArrayGenerator = myGenerator(arr);
    let sampleArr = [];
    let i = 0 ;
    for(let x of revArrayGenerator){
        sampleArr[i] = x;
        i++;
    }
    console.log(sampleArr);
    return sampleArr;
}

module.exports = { myGenerator, returnGenOut }