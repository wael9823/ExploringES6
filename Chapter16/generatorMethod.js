class spiderIterable {
    constructor(...args) {
        this.args = args;
    }
    * [Symbol.iterator]() {
        for(let arg of this.args)
        {
            yield arg;
        }
    }
}

function iterateSpider(){
    let arr = [];
    let i = 0;
    for(let word of new spiderIterable('Spiderman', 'is', 'awesome')) {
        arr[i] = word;
        i++;
    }
    return arr;
}

module.exports = iterateSpider;