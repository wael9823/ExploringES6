class Vehicles {
    constructor(noOfWheels, fuelSource, maxSpeed){
        this._noOfWheels = noOfWheels;
        this._fuelSource = fuelSource;
        this._maxSpeed = maxSpeed;
    }

    get noOfWheels() {
        return this._noOfWheels;
    }
    get fuelSource() {
        return this._fuelSource;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set noOfWheels(newWheelNo) {
        this._noOfWheels = newWheelNo;
    }
    set fuelSource(newSource) {
        this._fuelSource = newSource;
    }
    set maxSpeed(newSpeed) {
        this._maxSpeed = newSpeed;
    }
    static honkSound() {
        return 'honkHonk';
    }
    accelerate(value) {
        this._maxSpeed += value;
        return `The new maxSpeed is ${this._maxSpeed}`;
    }
    deccelerate(value) {
        this._maxSpeed -= value;
        return `The new maxSpeed is ${this._maxSpeed}`;
    }
}

class Auto extends Vehicles {
    constructor(noOfWheels, fuelSource, maxSpeed, fuelPerKm){
        super(noOfWheels, fuelSource, maxSpeed); 
        this._fuelPerKm = fuelPerKm; // this can only be used after super
    }
    fuelCharge(kms) {
        let charges = kms * this._fuelPerKm;
        return `The cost of fuel for ${kms} km ride is ${charges} Rs`;
    }
    static honkSound() {
        return super.honkSound() + ' by manually pressing the horn device.'
    }
}
let myAuto = new Auto(3, 'LPG', 90, 16);
// Instances can't access static methods
Auto.honkSound();
myAuto.fuelSource = 'Petrol';
myAuto.fuelSource;

module.exports = { myAuto, Auto};
