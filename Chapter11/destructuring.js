const mySpiderMan = {
    name: 'Peter',
    age: 28,
    job: 'Spiderman',
    friends: {
        aunt: 'Janine',
        schoolBudy: 'loy',
    },
    enemies: ['sandMan','Crusher']
}

function getSpiderName() {
    const { name: spiderName } = mySpiderMan;
    return spiderName;
}

function getSpiderAunt() {
    const {friends: spiderFriends} = mySpiderMan;
    return spiderFriends.aunt;
}

function getSpiderEnemies() {
    const {enemies: spiderEnemies} = mySpiderMan;
    return spiderEnemies;
}

module.exports.getSpiderName = getSpiderName;
module.exports.getSpiderAunt = getSpiderAunt;
module.exports.getSpiderEnemies = getSpiderEnemies;
