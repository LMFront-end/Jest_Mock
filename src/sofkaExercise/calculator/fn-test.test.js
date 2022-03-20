import * as app from './app';
import * as math from './math';

math.add = jest.fn();
math.subtract = jest.fn();
math.multiply = jest.fn();
math.divide = jest.fn();


describe('Math operation sum', () => {

    test.todo("add")

    test("calls math.sum", () => {
        app.doAdd(1, 2);
        expect(math.add).toBeCalledWith(1, 2);
    });
});

describe('Math operation sum', () => {

    test.todo("subtract")

    test("calls math.sub", () => {
        app.doSubtract(4, 2);
        expect(math.subtract).toBeCalledWith(4, 2);
    });
});

describe('Math operation sum', () => {

    test.todo("multiply")

    test("calls math.sub", () => {
        app.doMultiply(3, 2);
        expect(math.multiply).toBeCalledWith(3, 2);
    });
});

describe('Math operation sum', () => {

    test.todo("divide")

    test("calls math.sub", () => {
        app.doDivide(10, 2);
        expect(math.divide).toBeCalledWith(10, 2);
    });
});