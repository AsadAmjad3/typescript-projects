// Define an array of magician's names
var magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
// Function to show magicians
function show_magicians(magicianNames) {
    console.log("Magicians:");
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log(name_1);
    }
}
// Call the function and pass the array
show_magicians(magicians);
