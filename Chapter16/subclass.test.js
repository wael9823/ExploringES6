const { myAuto, Auto} = require("./subclass");

describe('Subclassing happens when derived class extends the base class', () => {
    it('Static methods are only accessible by classes', () => {
        expect(Auto.honkSound()).toEqual('honkHonk by manually pressing the horn device.');
    });
    it('Fuel source is changed from LPG to petrol', () => {
        expect(myAuto.fuelSource).toEqual('Petrol');
    });
    it('Instances of derived class can access methods of base class', () => {
        expect(myAuto.accelerate(30)).toEqual('The new maxSpeed is 120');
    });
    it('Static methods are only accessible by classes', () => {
        expect(myAuto.fuelCharge(3)).toEqual('The cost of fuel for 3 km ride is 48 Rs');
    });
});