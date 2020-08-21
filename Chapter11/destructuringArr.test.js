const { getVillians, getIndianHero, getSuperHeroes } = require("./destructuringArr");

describe('Destructuring can be used to get properties of objects', () => {
    it('Getting the values I need and skipping others', () => {
        expect(getVillians()).toEqual([ 'Joker', 'Crusher', 'Thanos' ]);
    });
    it('Getting allmy needed values in an array', () => {
        expect(getSuperHeroes()).toEqual([ 'Spiderman', 'Batman', 'Superman' ]);
    });
    it('Assigning and retreiving default values in absence', () => {
        expect(getIndianHero()).toEqual('shaktiman');
    });
    
});