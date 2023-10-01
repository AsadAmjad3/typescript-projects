// Define an array of places to visit (not in alphabetical order)
const placesToVisit: string[] = [
  "Paris",
  "Tokyo",
  "New York",
  "Machu Picchu",
  "Venice",
];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying it
console.log("\nAlphabetical order (temporary):");
console.log([...placesToVisit].sort());

// Confirm that the original array is still in its original order
console.log("\nOriginal order (confirming):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without modifying it
console.log("\nReverse alphabetical order (temporary):");
console.log([...placesToVisit].sort().reverse());

// Confirm that the original array is still in its original order
console.log("\nOriginal order (confirming again):");
console.log(placesToVisit);

// Reverse the order of the original list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again to restore the original order
placesToVisit.reverse();
console.log("\nRestored to original order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
