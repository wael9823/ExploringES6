let myArr = ['Spiderman','Batman','Superman','Joker','Crusher','Thanos']
let superHeroes = []
function getVillians() {
    let [, , ,...villians ] = myArr;
    return villians;
}
function getSuperHeroes() {
    [superHeroes[0],superHeroes[1],superHeroes[2]] = myArr;
    return superHeroes;
}

let myArr2 =[]
function getIndianHero() {
    let [shaktiman = 'shaktiman',chottaBheem = 'chottaBheem' ] = myArr2;
    return shaktiman;
}
getVillians();
module.exports.getVillians = getVillians;
module.exports.getIndianHero = getIndianHero;
module.exports.getSuperHeroes = getSuperHeroes;