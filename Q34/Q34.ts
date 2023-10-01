// Store the names of your favorite pizzas in an array
const favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Print the names of the pizzas using a for loop
console.log("Pizza Menu:");
for (const pizza of favorite_pizzas) {
  console.log(pizza);
}

// Modify the for loop to print sentences about each pizza
console.log("\nPizza Preferences:");
for (const pizza of favorite_pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Print a sentence about your love for pizza
console.log("\nI really love pizza!");
