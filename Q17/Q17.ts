// Define an array of initial guests with Muslim names
const initialGuests: string[] = [
  "Amina Khan",
  "Mohammed Ahmed",
  "Fatima Ali",
  "Sara Khan",
  "Ali Abbas",
  "Nadia Ahmed",
];

// Print a message about the guest who can't make it
const guestWhoCantMakeIt = "Mohammed Ahmed";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
const newGuest = "Hassan Malik";
const indexOfGuestWhoCantMakeIt = initialGuests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
  initialGuests[indexOfGuestWhoCantMakeIt] = newGuest;
}

// Print a message about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
initialGuests.unshift("Sara Khan");

// Add one new guest to the middle of the array
const middleIndex = Math.floor(initialGuests.length / 2);
initialGuests.splice(middleIndex, 0, "Ali Abbas");

// Use push() to add one new guest to the end of the list
initialGuests.push("Nadia Ahmed");

// Print a message about the limited space
console.log("Unfortunately, we can only invite two people for dinner.");

// Remove guests one at a time until only two names remain
while (initialGuests.length > 2) {
  const removedGuest = initialGuests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print an invitation message to the remaining two people
for (const guestName of initialGuests) {
  console.log(`Dear ${guestName}, you are still invited to dinner.`);
}

// Remove the last two names from the list to make it empty
initialGuests.splice(0, initialGuests.length);

// Print the empty list to confirm it's empty
console.log("Guest list is now empty:", initialGuests);
