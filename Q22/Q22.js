// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Attempt to access an out-of-range index
var index = 10;
var value = numbers[index];
// This line will produce an "Index out of range" error if executed
console.log("Value at index", index, "is:", value);
// Correct the error by checking the array bounds
if (index >= 0 && index < numbers.length) {
    console.log("Value at index", index, "is:", numbers[index]);
}
else {
    console.log("Index out of range.");
}
