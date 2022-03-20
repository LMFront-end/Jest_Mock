import * as app from './app';
import * as math from './math';

describe('Math operation sum', () => {

    test("calls math.add", () => {

        const originalAdd = math.add;

        math.add = jest.fn(originalAdd);

        expect(app.doAdd(1, 2)).toEqual(3);
        expect(math.add).toBeCalledWith(1, 2);

        math.add.mockImplementation(() => "mock");
        expect(app.doAdd(1, 2)).toEqual("mock");
        expect(math.add).toBeCalledWith(1, 2);

        math.add = originalAdd;
        expect(app.doAdd(1, 2)).toEqual(3);
    });

})

describe('Math operation sub', () => {

    test("calls math.subtract", () => {

        const originalSub = math.subtract;

        math.subtract = jest.fn(originalSub);

        expect(app.doSubtract(5, 2)).toEqual(3);
        expect(math.subtract).toBeCalledWith(5, 2);

        math.subtract.mockImplementation(() => "mock");
        expect(app.doSubtract(5, 2)).toEqual("mock");
        expect(math.subtract).toBeCalledWith(5, 2);

        math.subtract = originalSub;
        expect(app.doSubtract(5, 2)).toEqual(3);
    });

})

describe('Math operation mult', () => {

    test("calls math.multiply", () => {

        const originalMult = math.multiply;

        math.multiply = jest.fn(originalMult);

        expect(app.doMultiply(5, 2)).toEqual(10);
        expect(math.multiply).toBeCalledWith(5, 2);

        math.multiply.mockImplementation(() => "mock");
        expect(app.doMultiply(5, 2)).toEqual("mock");
        expect(math.multiply).toBeCalledWith(5, 2);

        math.multiply = originalMult;
        expect(app.doMultiply(5, 2)).toEqual(10);
    });

})


describe('Math operation div', () => {

    test("calls math.divide", () => {

        const originalDiv = math.divide;

        math.divide = jest.fn(originalDiv);

        expect(app.doDivide(2, 2)).toEqual(1);
        expect(math.divide).toBeCalledWith(2, 2);

        math.divide.mockImplementation(() => "mock");
        expect(app.doDivide(2, 2)).toEqual("mock");
        expect(math.divide).toBeCalledWith(2, 2);

        math.divide = originalDiv;
        expect(app.doDivide(2, 2)).toEqual(1);
    });

})