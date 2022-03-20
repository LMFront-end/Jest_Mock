const { add } = require('../utils/math_testing');
const { subt } = require('../utils/math_testing');
const { mult } = require('../utils/math_testing');
const { div } = require('../utils/math_testing');

const doAdd = (a, b) => add(a, b);
const doSubtract = (a, b) => subt(a, b);
const doMultiply = (a, b) => mult(a, b);
const doDivide = (a, b) => div(a, b);

module.exports = {
    doAdd,
    doSubtract,
    doMultiply,
    doDivide,
}