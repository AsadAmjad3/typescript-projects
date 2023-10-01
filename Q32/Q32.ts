// Create a list of current usernames
const current_users: string[] = ["Alice", "John", "Sarah", "Bob", "Eric"];

// Create a list of new usernames
const new_users: string[] = ["john", "Emily", "George", "sarah", "Alice"];

// Loop through the new_users list
for (const new_username of new_users) {
  // Check if the new username exists in current_users (case-insensitive)
  const isUsernameTaken = current_users.some(
    (current_username) =>
      current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(
      `Sorry, ${new_username} is already taken. Please choose a different username.`
    );
  } else {
    console.log(`Congratulations! ${new_username} is available.`);
  }
}
