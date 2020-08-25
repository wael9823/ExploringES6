let iterable = {
    [Symbol.iterator]() {
        let step = 0;
        let iterator = {
            next() {
                if (step <= 2) {
                    step++;
                }
                switch (step) {
                    case 1:
                    return { value: 'hello', done: false };
                    case 2:
                    return { value: 'world', done: false };
                    default:
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
};

module.exports = iterable;