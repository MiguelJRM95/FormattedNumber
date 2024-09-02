import isSpanishFormattedNumber from "./validate-spanish-formatted-number";

function parseSpanishFormattedNumber(input: string): string {
    // Check if the input is empty
    if (input === "") throw new Error("Error")
    // Check if the input have any non number character
    for (let i = 0; i < input.length; i++){
        const char = input[i];
        if (char !== ',' && char !== '.' && Number.isNaN(parseInt(char))) {
            throw new Error("Error");
        }
    }
    if (!isSpanishFormattedNumber(input)) throw new Error("Error");
    // Splits the number in two sides
    let [integer, decimal] = input.split(",");
    // Ensure the integer side can be replaced by just one 0
    if (Number.parseInt(integer) < 1){
        integer = "0";
    }
    // Checks if the decimal part is all zeros and removes it if so
    if (decimal && Number.parseInt(decimal) === 0) {
        decimal = "";
    }
    // Replace any dots in the integer side
    integer = integer.split('.').join('_');
    return decimal ? `${integer}.${decimal}` : integer;
}

export default parseSpanishFormattedNumber;