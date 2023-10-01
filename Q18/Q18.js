var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of places to visit (not in alphabetical order)
var placesToVisit = [
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
console.log(__spreadArray([], placesToVisit, true).sort());
// Confirm that the original array is still in its original order
console.log("\nOriginal order (confirming):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without modifying it
console.log("\nReverse alphabetical order (temporary):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
