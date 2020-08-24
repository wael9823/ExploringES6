let mySetOperations = {
    doUnion(set1,set2) {
        let union = new Set([...set1, ...set2]);
        return [...union];
    },
    doIntersection(set1,set2) {
        let intersection = [...set1].filter(value => set2.has(value));
        return [...intersection];
    },
    doDifference(set1,set2) {
        let difference = [...set1].filter(value => !set2.has(value));
        return [...difference];
    }
}

module.exports = mySetOperations;