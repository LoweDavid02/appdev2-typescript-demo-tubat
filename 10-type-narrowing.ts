// 10-type-narrowing.ts - Experimentation
function formatInput(input: string | number) {
    // Type Guard/Narrowing
    if (typeof input === "string") {
        // TypeScript knows 'input' is a string here
        return `String input: ${input.toUpperCase()}`;
    } else {
        // TypeScript knows 'input' is a number here
        return `Number input: $${input.toFixed(2)}`;
    }
}

console.log(formatInput("hello world"));
console.log(formatInput(150.5));