// Store the names of animals with a common characteristic in an array
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of the animals using a for loop
console.log("Animals:");
for (const animal of animals) {
  console.log(animal);
}

// Modify the for loop to print statements about each animal
console.log("\nAnimal Characteristics:");
for (const animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a sentence about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
