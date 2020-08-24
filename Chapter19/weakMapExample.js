let _name = new WeakMap();
let _clearName = new WeakMap();
class Namekeeper {
    constructor(name, clearName) {
    _name.set(this, name);
    _clearName.set(this, clearName);
    }

    changeName(newName) {
        let name = _name.get(this);
        _name.set(this, newName);
        if (newName === 'clear') {
            _name.delete(this);
            _clearName.get(this)();
            _clearName.delete(this);
        }
    }
    get name(){
        return _name.get(this);
    }
}

let myName = new Namekeeper('wael', () => console.log('Clearing your name'));

/*console.log(myName.name);
myName.changeName('Asim');
console.log(myName.name);
myName.changeName('clear');
console.log(myName.name);*/

module.exports = myName;