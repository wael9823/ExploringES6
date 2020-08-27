const wakeUpNew = require("./chainingPromisFuncs");

describe('Promises can be chained by resolving another promise', () => {
    it('If the first promise is fulfilled, the promise in resolve() is invoked', () => {
        return wakeUpNew(8).then(result => {
            expect(result).toBe('Coded for an hour by waking up at 8');
        })    });   
    it('If the first promise is rejected, we receive a promise with rejected value', () => {
        return wakeUpNew(10).catch(result => {
            expect(result).toBe('Woke late');
        })    });  
    it('If the second promise is rejected, we receive a promise with rejected value', () => {
         return wakeUpNew(9).catch(result => {
            expect(result).toBe('Slept blissfully till 9');
        })    }); 
});