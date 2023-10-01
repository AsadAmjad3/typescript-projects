"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Store a person's name with whitespace characters
const nameWithWhitespace = "\t \nJohn Doe\t \n";
// Print the name with whitespace
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
// Strip the whitespace
const strippedName = nameWithWhitespace.trim();
// Print the stripped name
console.log("\nStripped Name:");
console.log(strippedName);
