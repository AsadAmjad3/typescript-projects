// Store the names of animals with a common characteristic in an array
var animals = ["Dog", "Cat", "Rabbit"];
// Print the names of the animals using a for loop
console.log("Animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Modify the for loop to print statements about each animal
console.log("\nAnimal Characteristics:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a sentence about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
