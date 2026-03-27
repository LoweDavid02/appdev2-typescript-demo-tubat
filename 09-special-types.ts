// Assignment: 09-special-types.ts
// Experimenting with Null and Undefined

// ------------------------------------------------
// Special Type - null
// ------------------------------------------------
let userAccountStatus: null;

// Only null is allowed here
userAccountStatus = null; 

// The line below would throw an error because "Active" is a string, not null.
// userAccountStatus = "Active"; 

// Union Type: Allowing a string OR null (Common for API data)
let middleName: null | string;

middleName = null;      // Valid: User doesn't have a middle name
middleName = "Tubat"; // Valid: User updated their middle name
// middleName = 25;     // Error: 25 is a number, not null or string.

// ------------------------------------------------
// Special Type - undefined
// ------------------------------------------------
let pendingTask: undefined;

pendingTask = undefined;
// pendingTask = null;  // Error: null is not the same as undefined in strict mode

// Union Type: Allowing a number OR undefined (Common for optional IDs)
let optionalId: undefined | number;

optionalId = undefined; // Valid: ID hasn't been assigned yet
optionalId = 90210;     // Valid: ID is now a number
// optionalId = "ID-99"; // Error: "ID-99" is a string.

console.log("Middle Name:", middleName);
console.log("Optional ID:", optionalId);