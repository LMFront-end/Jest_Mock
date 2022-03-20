import * as app from './app';
import * as math from './math';

describe('Math operation sum', () => {

    test("calls math.add", () => {

        const addMock = jest.spyOn(math, "add");

        addMock.mockImplementation(() => "mock");
        expect(app.doAdd(1, 2)).toEqual("mock");

        addMock.mockRestore();
        expect(app.doAdd(1, 2)).toEqual(3);
    })
});

describe('Math operation sub', () => {

    test("calls math.subtract", () => {

        const subMock = jest.spyOn(math, "subtract");

        subMock.mockImplementation(() => "mock");
        expect(app.doSubtract(3, 2)).toEqual("mock");

        subMock.mockRestore();
        expect(app.doSubtract(3, 2)).toEqual(1);
    })
});

describe('Math operation mul', () => {

    test("calls math.multiply", () => {

        const mulMock = jest.spyOn(math, "add");

        mulMock.mockImplementation(() => "mock");
        expect(app.doMultiply(1, 2)).toEqual("mock");

        mulMock.mockRestore();
        expect(app.doMultiply(1, 2)).toEqual(2);
    })
});

describe('Math operation div', () => {

    test("calls math.divide", () => {

        const divMock = jest.spyOn(math, "add");

        divMock.mockImplementation(() => "mock");
        expect(app.doDivide(2, 2)).toEqual("mock");

        divMock.mockRestore();
        expect(app.doDivide(2, 2)).toEqual(1);
    })
});