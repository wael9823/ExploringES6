let myArr = ['Spiderman','Batman','Superman','Joker','Crusher','Thanos']

function getVillians() {
    let [, , ,...villians] = myArr;
    return villians;
}
let myArr2 =[]

function getIndianHero() {
    let [shaktiman = 'shaktiman',chottaBheem = 'chottaBheem' ] = myArr2;
    return shaktiman;
}

module.exports.getVillians = getVillians;
module.exports.getIndianHero = getIndianHero;