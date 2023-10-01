// Define an array of magicianNames's names
var magicianNames = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
// Function to show magicianNames
function showmagicians(magicianNames) {
    console.log("Magicians:");
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log(name_1);
    }
}
// Function to make magicianNames great
function make_great(magicianNames) {
    var greatMagicians = [];
    for (var _i = 0, magicianNames_2 = magicianNames; _i < magicianNames_2.length; _i++) {
        var name_2 = magicianNames_2[_i];
        greatMagicians.push("".concat(name_2, " the Great"));
    }
    return greatMagicians;
}
// Add "the Great" to each magicianNames's name
var greatMagicians = make_great(magicianNames);
// Call the function to show the modified list
showmagicians(greatMagicians);
