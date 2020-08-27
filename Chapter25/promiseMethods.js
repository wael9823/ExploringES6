function getUp(wakeTime) {
    return new Promise( (resolve, reject) => {
        if(wakeTime <= 9)
            setTimeout(resolve ('Woke up'),1000);// resolve(['Awoke at 9', wakeTime]);
        setTimeout(reject('Woke late'),1000);
    });
}

function codePromises(value) {
    return new Promise( (resolve, reject) => {
        if(value <= 8)
            setTimeout(resolve('Coded for the day by waking up at ' + value),2000);
        setTimeout(reject('Slept blissfully till ' + value),2000);
    });
}

function sleepAgain() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve('Wake, Code, Sleep'),3000);
    });
}

module.exports = {getUp, codePromises, sleepAgain};
