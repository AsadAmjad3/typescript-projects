function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(
    `You have ordered a ${size}-sized shirt with the message: "${message}".`
  );
}

// Create different shirts
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
make_shirt("Small", "Custom message"); // Small shirt with a custom message
