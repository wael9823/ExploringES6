const { getTolexCost, getTolexColour, getTolexFounding, getNewWatch} = require("./addingProps");

describe('Object.asssign can be used to add properties and clone objects', () => {
    it('Tolex watch cost is same as that of a modern watch of 450', () => {
        expect(getTolexCost()).toEqual(450);
    });
    it('Tolex watch colour is black', () => {
        expect(getTolexColour()).toEqual('black');
    });
    it('Tolex company was founded on 15th may 2001, 9:10am IST', () => {
        expect(getTolexFounding()).toEqual('Tue May 15 2001 09:10:00 GMT+0530 (India Standard Time)');
    });
    it('This is clone of Tolex but with different brandname', () => {
        expect(getNewWatch('Ragheur')).toEqual('Ragheur');
    });
});