let doWork = function(isWorkComplete) {
    return new Promise(function(resolve, reject) {
        if (isWorkComplete){
            resolve('Work was completed');
        }
        reject('Failed to complete the Work');
    });
}

module.exports = doWork;
