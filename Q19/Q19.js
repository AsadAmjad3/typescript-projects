// Define an array of initial guests with Muslim names
var initialGuests = [
    "Amina Khan",
    "Mohammed Ahmed",
    "Fatima Ali",
    "Sara Khan",
    "Ali Abbas",
    "Nadia Ahmed",
];
// Print a message about the guest who can't make it
var guestWhoCantMakeIt = "Mohammed Ahmed";
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Hassan Malik";
var indexOfGuestWhoCantMakeIt = initialGuests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    initialGuests[indexOfGuestWhoCantMakeIt] = newGuest;
}
// Print a message about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
initialGuests.unshift("Sara Khan");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(initialGuests.length / 2);
initialGuests.splice(middleIndex, 0, "Ali Abbas");
// Use push() to add one new guest to the end of the list
initialGuests.push("Nadia Ahmed");
// Print a message indicating the number of people you are inviting
console.log("You are inviting ".concat(initialGuests.length, " people to dinner."));
// ... (the rest of the code remains the same)
