import * as app from './app';
import * as math from './math';

jest.mock("./math.js");

describe('Math operation sum', () => {

    test.todo("add")

    test("calls math.add", () => {
        app.doAdd(1, 2);
        expect(math.add).toBeCalledWith(1, 2);
    });

});

describe('Math operation subtract', () => {

    test.todo("subtract")

    test("calls math.subtract", () => {
        app.doSubtract(1, 2);
        expect(math.subtract).toBeCalledWith(1, 2);
    });

});

describe('Math operation mutiply', () => {

    test.todo("multiply")

    test("calls math.multiply", () => {
        app.doMultiply(1, 2);
        expect(math.multiply).toBeCalledWith(1, 2);
    });

});

describe('Math operation divide', () => {

    test.todo("divide")

    test("calls math.divide", () => {
        app.doDivide(1, 2);
        expect(math.divide).toBeCalledWith(1, 2);
    });

});