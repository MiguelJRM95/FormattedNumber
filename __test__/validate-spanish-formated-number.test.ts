import isValidNumber from '../src/validate-spanish-formated-number';

describe('isValidSpanishNumber', () => {
    test('should return true', () => {
        expect(isValidNumber("1")).toBe(true);
        expect(isValidNumber("1,234")).toBe(true);
        expect(isValidNumber("1.234")).toBe(true);
        expect(isValidNumber("1.234,567")).toBe(true);
        expect(isValidNumber("1.234.567")).toBe(true);
    })

    test('should return false', () => {
        expect(isValidNumber("1.0")).toBe(false);
        expect(isValidNumber("1,234.567")).toBe(false);
        expect(isValidNumber("1,23.4567")).toBe(false);
    })
})