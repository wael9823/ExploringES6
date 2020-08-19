function compareThis(str1,str2) { 
    return str1 === str2;
}
function reverseStr(str) {
    const revStr = ([...str].reverse().join(''));
    return (revStr.toString());
}

module.exports.compareThis = compareThis;
module.exports.reverseStr = reverseStr;