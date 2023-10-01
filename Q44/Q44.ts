function order_sandwich(...items: string[]): void {
  if (items.length === 0) {
    console.log("You ordered an empty sandwich. Please specify some items.");
  } else {
    console.log("Sandwich Order Summary:");
    console.log("Items: " + items.join(", "));
    console.log("Enjoy your sandwich!");
  }
}

// Call the function three times with different numbers of arguments
order_sandwich("Ham", "Cheese", "Lettuce");
order_sandwich("Turkey", "Tomato");
order_sandwich();
