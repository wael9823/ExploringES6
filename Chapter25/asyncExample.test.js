const example = require("./asyncExample");

describe('Async and await replace then and  catch as syntactical sugarcoats', () => {
    it('Await waits till the promise is resolved or rejected', () => {
        return example(8).then(result => {
            expect(result).toEqual([[ 'Awoke before 9', 8 ], 'Coded for an hour by waking up at 8' ]);
        })    });  
    it('The rejected values of first promise are handled using try catch', () => {
        return example(11).then(result => {
            expect(result).toEqual('Woke late');
        })    }); 
    it('The rejected values of second promise are handled using try catch', () => {
        return example(9).then(result => {
            expect(result).toEqual('Slept blissfully till 9');
        })    });  
});