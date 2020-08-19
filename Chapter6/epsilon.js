function normalAdd(x,y,res) {
    return x + y === res;
}

function epsEquAdd(x,y,res) {
    return Math.abs((x+y)-res) < Number.EPSILON;
}

module.exports.normalAdd = normalAdd;
module.exports.epsEquAdd = epsEquAdd;