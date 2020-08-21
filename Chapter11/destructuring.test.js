const { getSpiderAunt, getSpiderName, getSpiderEnemies, getSpiderHobby } = require("./destructuring");

describe('Destructuring can be used to get properties of objects', () => {
    it('The name of my spiderman object is peter', () => {
        expect(getSpiderName()).toEqual('Peter');
    });
    it('The name of my spiderman object aunt is janine', () => {
        expect(getSpiderAunt()).toEqual('Janine');
    });
    it('sandman and crusher are spidermans enemies', () => {
        expect(getSpiderEnemies()).toEqual(['sandMan','Crusher']);
    });
    it('Spiderman hobby is climbing walls', () => {
        expect(getSpiderHobby()).toEqual('climbing walls');
    });
});