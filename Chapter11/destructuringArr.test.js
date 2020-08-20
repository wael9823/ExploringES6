const { getVillians, getIndianHero } = require("./destructuringArr");

describe('Destructuring can be used to get properties of objects', () => {
    it('Getting the values I need and skipping others', () => {
        expect(getVillians()).toEqual([ 'Joker', 'Crusher', 'Thanos' ]);
    });
    it('Assigning and retreiving default values in absence', () => {
        expect(getIndianHero()).toEqual('shaktiman');
    });
    
});