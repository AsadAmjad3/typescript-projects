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

// Create and print the second set of invitation messages
for (let i = 0; i < initialGuests.length; i++) {
  const guestName = initialGuests[i];
  console.log(
    `Dear ${guestName}, I would like to invite you to dinner. Please join me for a wonderful evening.`
  );
}
