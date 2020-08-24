const { mappingAMap, combinedMap } = require("./operationMaps");

describe('Maps are data structures that store key value pairs', () => {
    it('We can do Array.map on a Map by converting the map to an array', () => {
        expect(mappingAMap()).toEqual([ [ 1, '_First' ], [ 2, '_Second' ], [ 3, '_Third' ] ]);
    });   
    it('We can combine two maps by converting them to arrays and reconverting to map', () => {
        expect(combinedMap()).toEqual([
            [ 2, 'First' ],
            [ 4, 'Second' ],
            [ 6, 'Third' ],
            [ 8, 'Fourth' ],
            [ 10, 'Fifth' ]
          ]);
    }); 
});