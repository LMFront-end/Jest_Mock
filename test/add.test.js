const { add } = require('../utils/math_testing');

add = jest.fn();

describe('Math operation', () => {

    test('of a simple sum', () => {
        expect(add(1, 1)).toBe(2);
    })
});