function wakeUpNew(wakeTime) {
    return new Promise( (resolve, reject) => {
        if(wakeTime <= 9)
            resolve(['Awoke before 9', wakeTime]);
        reject('Woke late');
    });
}

function codePromises(value) {
    return new Promise( (resolve, reject) => {
        if(value <= 8)
            resolve('Coded for an hour by waking up at ' + value);
        reject('Slept blissfully till ' + value);
    })
}

async function example(time) {
    try {
        let result1 = await wakeUpNew(time);
        let result2 = await codePromises(result1[1]);
        console.log(result1);
        console.log(result2);
        return [result1, result2]; // returns a promise only
    }   catch(err) {
        return err;
    }
}
example(9);
module.exports = example;
