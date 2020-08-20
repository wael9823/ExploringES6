const outerFunc = require("./temporalDeadZone");

describe('Variables defined using let and const are in TDZ till declared', () => {
    it('After declaration we can set or get a let or const variable', () => {
        expect(outerFunc()).toEqual(3);
    });
});