
function isSpanishFormattedNumber(input: string): boolean {
    let decimalFound = false;
    let indexOfDecimal = -1;
    let lastDotIndex = -1;

    const numberLength = input.length;

    for (let i = 0; i < numberLength; i++) {
        let char = input[i];

        if (char === ",") {
            // Comma can only be found once and must be after all dots
            if (decimalFound || lastDotIndex > -1 && i < lastDotIndex) return false;
            decimalFound = true;
            indexOfDecimal = i;
        }

        if (char === ".") {
            // Ensure the dot is a valid thousand separator
            if (i - lastDotIndex !== 4 && lastDotIndex !== -1) return false;
            lastDotIndex = i;

            // Checks no comma appears before any dot
            if (decimalFound) return false;
        }
    }

    // After the loop, check if there are digits before the first dot and after the last dot
    return !(lastDotIndex !== -1 && (lastDotIndex < 1 || lastDotIndex > numberLength - 4));


}

export default isSpanishFormattedNumber;