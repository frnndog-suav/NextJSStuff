import customCalculation from './customCalculation';

describe('customCalculation', () => {
    it("If the inputs are '1' and '2', the return should return '3'", () => {
        const result = customCalculation(1, 2);
        expect(result).toBe(3);
    });
});
