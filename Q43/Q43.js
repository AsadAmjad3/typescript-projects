var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of magician's names
var magician = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
// Function to show magicians
function showmagicians(magicianNames) {
    console.log("Magician:");
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log(name_1);
    }
}
// Function to make magicians great without modifying the original array
function makegreat(magicianNames) {
    var greatMagician = [];
    for (var _i = 0, magicianNames_2 = magicianNames; _i < magicianNames_2.length; _i++) {
        var name_2 = magicianNames_2[_i];
        greatMagician.push("".concat(name_2, " the Great"));
    }
    return greatMagician;
}
// Create a copy of the original array
var originalMagicians = __spreadArray([], magician, true);
// Call makegreat() with the copy to create a new array
var greatMagician = makegreat(originalMagicians);
// Call the function to show the original and modified arrays
showmagicians(originalMagicians);
showmagicians(greatMagician);
