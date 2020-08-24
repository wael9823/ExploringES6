const { returnKeys, returnEntries, mymap} = require("./mapsExample");

describe('Maps are data structures that store key value pairs', () => {
    it('We can iterate over the entries using mymap.entries', () => {
        expect(returnEntries()).toEqual([ [ { name: 'First' }, 'one' ], [ { name: 'second' }, 'two' ] ]);
    });
    it('We can iterate over keys using mymap.keys', () => {
        expect(returnKeys()).toEqual([ { name: 'First' }, { name: 'second' } ]);
    }); 
    it('We can get the size of the map', () => {
        expect(mymap.size).toEqual(2);
    });
    it('On clear, all entries are removed', () => {
        mymap.clear();
        expect(mymap.size).toEqual(0);
    });
    
});