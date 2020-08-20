const myObj = {}

function objProps(){
    return myObj;
}

function newObjProps(){
    myObj.name = 'Wael';
    myObj.age = 21;
    return myObj;
}

module.exports.objProps = objProps;
module.exports.newObjProps = newObjProps;