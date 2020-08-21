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
    const { name } = mySpiderMan; // Property value shorthands
    return name;
}

function getSpiderAunt() {
    const {friends: spiderFriends} = mySpiderMan;
    return spiderFriends.aunt;
}

function getSpiderEnemies() {
    const {enemies: spiderEnemies} = mySpiderMan;
    return spiderEnemies;
}

function getSpiderHobby() {
    const {hobby: spiderHobby='climbing walls'} = mySpiderMan;
    return spiderHobby;
}

module.exports.getSpiderName = getSpiderName;
module.exports.getSpiderAunt = getSpiderAunt;
module.exports.getSpiderEnemies = getSpiderEnemies;
module.exports.getSpiderHobby = getSpiderHobby;