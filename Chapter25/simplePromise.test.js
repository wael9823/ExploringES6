const doWork = require("./simplePromise");

describe('Promises are objects that store results of asynchronous operations', () => {
    it('If the promise is fulfilled, we receive a promise with resolved value', () => {
        return doWork(true).then(result => {
            expect(result).toBe('Work was completed');
        })    });   
    it('If the promise is rejected, we receive a promise with rejected value', () => {
        return doWork(false).catch(result => {
            expect(result).toBe('Failed to complete the Work');
        })    });  
});