function greetPerson(name) {
    return `Hello Everyone!
My name is "${name.toUpperCase()}".
It's nice to meet all of you.`;
}
console.log(greetPerson('wael'));

module.exports = greetPerson;