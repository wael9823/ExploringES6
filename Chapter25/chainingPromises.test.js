const wakeUp = require("./chainingPromises");

describe('Promises can be chained together using the then method', () => {
    it('If the first promise is fulfilled, we receive a promise with resolved value', () => {
        return wakeUp(8).then(resolveValue => {
            return new Promise( (resolve, reject) => {
                if(resolveValue[1] <= 8)
                    resolve('Coded for an hour');
                reject('Slept blissfully');
            });
        }).then(resolveMessage => {
            expect(resolveMessage).toBe('Coded for an hour');
        });
     });    
     it('If the first promise is rejected, we receive a promise with rejected value', () => {
        return wakeUp(10).then(resolveValue => {
            return new Promise( (resolve, reject) => {
                if(resolveValue[1] <= 8)
                    resolve('Coded for an hour');
                reject('Slept blissfully');
            });
        }).then(resolveMessage => {
            expect(resolveMessage).toBe('Coded for an hour');
        }).catch(rejectValue => {
            expect(rejectValue).toBe('Woke late');
        });
     });  
     it('If the second promise is rejected, we receive a promise with rejected value', () => {
        return wakeUp(9).then(resolveValue => {
            return new Promise( (resolve, reject) => {
                if(resolveValue[1] <= 8)
                    resolve('Coded for an hour');
                reject('Slept blissfully');
            });
        }).then(resolveMessage => {
            expect(resolveMessage).toBe('Coded for an hour');
        }).catch(rejectValue => {
            expect(rejectValue).toBe('Slept blissfully');
        });
     }); 
});