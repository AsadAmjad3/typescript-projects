// Tests for equality and inequality with strings
var str1 = "Hello";
var str2 = "hello";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true
// Tests using the lowercase function
var text1 = "Hello World";
var text2 = "hello world";
console.log(text1.toLowerCase() === text2); // true
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); //true
console.log(num1 < num2); // false
console.log(num1 >= num2); //true
console.log(num1 <= num2); // false
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
var z = 15;
console.log(x < y && y < z);
console.log(x < y || y > z);
console.log(x > y && y < z);
console.log(x > y || y > z);
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits.includes("banana"));
console.log(fruits.includes("kiwi"));
//test whether an item is not in an array
var colors = ["red", "green", "blue", "yellow"];
console.log(!colors.includes("purple"));
console.log(!colors.includes("green"));
