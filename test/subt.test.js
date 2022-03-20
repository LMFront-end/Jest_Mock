const { subt } = require('../utils/math_testing');

describe('Math operation', () => {

    test('of a simple subt', () => {
        expect(subt(5, 1)).toBe(4);
    })
});