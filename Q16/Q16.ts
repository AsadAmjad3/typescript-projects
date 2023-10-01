// Define an array of initial guests with Muslim names
const initialGuests: string[] = ["Amina Khan", "Mohammed Ahmed", "Fatima Ali"];

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

// Create and print the new set of invitation messages
for (let i = 0; i < initialGuests.length; i++) {
  const guestName = initialGuests[i];
  console.log(
    `Dear ${guestName}, I would like to invite you to dinner. Please join me for a wonderful evening.`
  );
}
