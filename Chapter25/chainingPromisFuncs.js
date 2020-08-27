function wakeUpNew(wakeTime) {
    return new Promise( (resolve, reject) => {
        if(wakeTime <= 9)
            resolve (codePromises(wakeTime));// resolve(['Awoke at 9', wakeTime]);
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

module.exports = wakeUpNew;
