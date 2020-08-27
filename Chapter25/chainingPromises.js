function wakeUp(wakeTime){
    return new Promise( (resolve, reject) => {
        if(wakeTime <= 9)
            resolve(['Awoke at 9', wakeTime]);
        reject('Woke late');
    });
}

module.exports = wakeUp;