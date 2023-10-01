// Create a list of current usernames
var current_users = ["Alice", "John", "Sarah", "Bob", "Eric"];
// Create a list of new usernames
var new_users = ["john", "Emily", "George", "sarah", "Alice"];
var _loop_1 = function (new_username) {
    // Check if the new username exists in current_users (case-insensitive)
    var isUsernameTaken = current_users.some(function (current_username) {
        return current_username.toLowerCase() === new_username.toLowerCase();
    });
    if (isUsernameTaken) {
        console.log("Sorry, ".concat(new_username, " is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations! ".concat(new_username, " is available."));
    }
};
// Loop through the new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
