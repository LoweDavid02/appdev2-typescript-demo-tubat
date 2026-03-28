## 06-alternative-to-enum.ts
Concept: Literal Type Unions vs. Enums.

My Explanation: While enum is a built-in TypeScript feature, it often creates unnecessary overhead in the final JavaScript bundle. By using a Union of String Literals (e.g., type Direction = "North" | "South"), we get the same "type-safe picklist" behavior without the extra code.

Key Takeaway: Prefer Literal Unions for simpler, cleaner, and more idiomatic "constant" sets.

## 07-custom-type-role.ts
Concept: Structured Type Aliases.

My Explanation: This file focuses on defining the "shape" of complex objects. By creating a custom User or Admin type, we create a strict contract. If an object is missing a required property—like an email or a specific permission level—TypeScript flags it immediately.

Key Takeaway: Custom types act as the "blueprints" for your data, ensuring consistency across a large codebase.

## 08-functions.ts
Concept: Parameter and Return Type Annotation.

My Explanation: Here, we stop letting functions be "black boxes." By explicitly defining what goes in (parameters) and what comes out (return value), we prevent common logic errors, such as passing a string to a function expecting a number.

Key Takeaway: Explicit function typing makes your code self-documenting and significantly easier to debug.

## 09-special-types.ts
Concept: any, unknown, void, and never.

My Explanation: This section explores the "safety valves" of TypeScript. We learn the difference between any (which turns off type checking) and unknown (which forces you to check the type before using it). We also see void for functions that return nothing and never for functions that throw errors or loop infinitely.

Key Takeaway: Use unknown over any whenever possible to maintain type safety while handling dynamic data.

## 10-form.html and 10-type-narrowing.ts
Concept: DOM Interaction and Type Guards.

My Explanation: When working with the browser, TypeScript often only sees a generic Element. This file demonstrates Type Narrowing—using logic like if (element instanceof HTMLInputElement)—to "prove" to the compiler that an object has specific properties (like .value).

Key Takeaway: Type narrowing is the bridge between the high-level logic of TypeScript and the unpredictable nature of the DOM.

## 11-optional.ts
Concept: Optional Properties (?) and Optional Chaining (?.).

My Explanation: Not all data is guaranteed to exist. This file explores how to mark properties as optional so the compiler doesn't complain if they are missing, and how to use the "Elvis operator" (?.) to safely access nested properties without crashing the app.

Key Takeaway: Optionality allows TypeScript to model real-world, "messy" data structures safely and concisely.