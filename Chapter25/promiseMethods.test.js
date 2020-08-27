const { sleepAgain, codePromises, getUp } = require("./promiseMethods");

let wholeDay = Promise.all([getUp(8), codePromises(8),sleepAgain()]);
let newDay = Promise.allSettled([getUp(18), codePromises(9),sleepAgain()]);
let oldDay = Promise.race([getUp(11), codePromises(8),sleepAgain()]);

describe('Promises methods can be used to do promise composition', () => {
    it('Promise.all is resolved only when all promised are resolved', () => {
        return wholeDay.then( result => {
            return `${result[0]}. ${result[1]}. ${result[2]}.`;
        }).then( message => {
            expect(message).toBe(`Woke up. Coded for the day by waking up at 8. Wake, Code, Sleep.`);
        });
    });
    it('Promise.all is rejected when any promise is rejected', () => {
        return Promise.all([getUp(11), codePromises(8),sleepAgain()]).then( result => {
            return `${result[0]}. ${result[1]}. ${result[2]}.`;
        }).catch( error => expect(error).toBe(`Woke late`));
    });
    it('Promise.allSettled waits for all promises to be either resolved or rejected', () => {
        return newDay.then( 
            results => {
            let resultString= '';
            results.forEach(result => {
                if(result.status == 'rejected')
                    resultString += `${result.reason}.`;
                else 
                    resultString += `${result.value}.`;
            });
            return resultString;
        }).then(message => expect(message).toBe(`Woke late.Slept blissfully till 9.Wake, Code, Sleep.`));
    });
    it('Promise.race is settled with the first promise that is either resolved or rejected', () => {
        return oldDay.then( result => {
            expect(result).toBe(`Woke up`);
        }).catch( error => expect(error).toBe(`Woke late`));
    });
});