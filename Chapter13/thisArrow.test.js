const myObj = require("./thisArrow");

describe('Objects methods should avoid arrow functions', () => {
    it('Arrow function property has this that points to surrounding scope, global object', () => {
        expect(myObj.displayIt()).toBeUndefined();
    });
    it('Arrow function property inside a property points to the property\'s object', () => {
        expect(myObj.surprise()).toEqual('Awesome');
    });

});