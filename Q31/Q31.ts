// Create an array of users
const users: string[] = ["admin", "Eric", "Alice", "John", "Sarah"];

// Check if the list of users is not empty
if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  // Loop through the array and print greetings
  for (const username of users) {
    if (username === "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all users to test the empty list condition
users.length = 0;

// Check if the list of users is not empty
if (users.length === 0) {
  console.log("We need to find some users!");
}
