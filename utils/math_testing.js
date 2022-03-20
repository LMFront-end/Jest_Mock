const add = (a, b) => {

    if (typeof a && typeof b !== 'number') return ('Enter values correctly');

    return a + b

}

const subt = (a, b) => {

    if (typeof a && typeof b !== 'number') return ('Enter values correctly');

    return a - b;

}
const mult = (a, b) => {

    if (typeof a && typeof b !== 'number') return ('Enter values correctly');


    return a * b;

}

const div = (a, b) => {

    if (typeof a && typeof b !== 'number') return ('Enter values correctly');

    if (b === 0) return ('You can not divide by 0');


    return a / b;

}


module.exports = {
    add,
    subt,
    mult,
    div
}