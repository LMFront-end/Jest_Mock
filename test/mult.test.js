const { mult } = require('../utils/math_testing');

describe('Math operation', () => {

    test('of a simple multiply', () => {
        expect(mult(1, 0)).toBe(0);
    })
});