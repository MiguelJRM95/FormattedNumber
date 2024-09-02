import parseSpanishFormattedNumber from "../src/parse-spanish-formatted-number";

describe('parseSpanishFormattedNumber', () => {
    test('SHOULD return the correct formatted number WHEN the number is a valid spanish number', () => {
        expect(parseSpanishFormattedNumber("10,0")).toBe("10")
        expect(parseSpanishFormattedNumber("10,000")).toBe("10")
        expect(parseSpanishFormattedNumber("10.000")).toBe("10_000")
        expect(parseSpanishFormattedNumber("10.000,01")).toBe("10_000.01")
        expect(parseSpanishFormattedNumber("0.000,01")).toBe("0.01")
    })
    test('SHOULD return an error WHEN the number is not a valid spanish number', () => {
        expect(() => parseSpanishFormattedNumber("10.0")).toThrow("Error")
        expect(() => parseSpanishFormattedNumber("10.00")).toThrow("Error")
    })
})