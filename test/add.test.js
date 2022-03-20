const { add } = require('../utils/math_testing');


describe('Math operation', () => {

    test('of a simple sum', () => {
        expect(add(1, 1)).toBe(2);
    })
});