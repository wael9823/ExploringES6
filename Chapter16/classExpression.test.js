const oldCar = require("./classExpression");

describe('Objects of classesshould have right properties', () => {
    it('Old Car brand is Honda', () => {
        expect(oldCar.brand).toEqual('Honda');
    });
    it('Old Car does not have turbo', () => {
        expect(oldCar.hasTurbo).toBeFalsy();
    });
    it('Old Car max speed is 180', () => {
        expect(oldCar.maxSpeed).toEqual(180);
    });
    it('This is clone of Tolex but with different brandname', () => {
        expect(oldCar.increaseMaxSpeed(20)).toEqual('Increased max speed by 20 and it is now 200');
    });
});