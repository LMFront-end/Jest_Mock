import * as app from './app';
import * as math from './math';


describe('Math operation sum', () => {

    test("calls math.add", () => {

        const addMock = jest.spyOn(math, "add");
        expect(app.doAdd(1, 2)).toEqual(3);
        expect(addMock).toBeCalledWith(1, 2);
    })
});

describe('Math operation sub', () => {

    test("calls math.subtract", () => {

        const subMock = jest.spyOn(math, "subtract");
        expect(app.doSubtract(3, 30)).toEqual(-27);
        expect(subMock).toBeCalledWith(3, 30);
    })
});

describe('Math operation mul', () => {

    test("calls math.multiply", () => {

        const mulMock = jest.spyOn(math, "multiply");
        expect(app.doMultiply(3, 3)).toEqual(9);
        expect(mulMock).toBeCalledWith(3, 3);
    })
});

describe('Math operation div', () => {

    test("calls math.divide", () => {

        const divMock = jest.spyOn(math, "divide");
        expect(app.doDivide(10, 2)).toEqual(5);
        expect(divMock).toBeCalledWith(10, 2);
    })
});