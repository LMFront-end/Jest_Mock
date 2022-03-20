const { div } = require('../utils/math_testing');


describe('Math operation', () => {

    test('of division', () => {
        expect(div(1, 1)).toBe(1);
    })

    test('divide between zero', () => {
        expect(div(2, 0)).toBe(0);
    })

});