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
// Print a message about the limited space
console.log("Unfortunately, we can only invite two people for dinner.");
// Remove guests one at a time until only two names remain
while (initialGuests.length > 2) {
    var removedGuest = initialGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print an invitation message to the remaining two people
for (var _i = 0, initialGuests_1 = initialGuests; _i < initialGuests_1.length; _i++) {
    var guestName = initialGuests_1[_i];
    console.log("Dear ".concat(guestName, ", you are still invited to dinner."));
}
// Remove the last two names from the list to make it empty
initialGuests.splice(0, initialGuests.length);
// Print the empty list to confirm it's empty
console.log("Guest list is now empty:", initialGuests);
