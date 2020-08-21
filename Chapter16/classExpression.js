const CarClass = class Cars {
    constructor (brand, maxSpeed, hasTurbo = false)
    {
        this._brand = brand;
        this._maxSpeed = maxSpeed;
        this._hasTurbo = hasTurbo;
    }
    getClassName() {
        return Cars.name;
    }
    get brand(){
        return this._brand;
    }
    get maxSpeed(){
        return this._maxSpeed;
    }
    get hasTurbo(){
        return this._hasTurbo;
    }
    increaseMaxSpeed(value) {
        this._maxSpeed += value;
        return `Increased max speed by ${value} and it is now ${this._maxSpeed}`;
    }
};
let oldCar = new CarClass('Honda', 180)

module.exports = oldCar;
