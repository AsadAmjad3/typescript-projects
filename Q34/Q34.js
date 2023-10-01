// Store the names of your favorite pizzas in an array
var favorite_pizzas = ["Pepperoni", "Margherita", "Supreme"];
// Print the names of the pizzas using a for loop
console.log("Pizza Menu:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print sentences about each pizza
console.log("\nPizza Preferences:");
for (var _a = 0, favorite_pizzas_2 = favorite_pizzas; _a < favorite_pizzas_2.length; _a++) {
    var pizza = favorite_pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print a sentence about your love for pizza
console.log("\nI really love pizza!");
