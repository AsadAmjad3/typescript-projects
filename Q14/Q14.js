"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define an array of guests with Muslim names
const muslimGuests = ["Amina Khan", "Mohammed Ahmed", "Fatima Ali"];
// Create and print messages inviting each person to dinner
for (let i = 0; i < muslimGuests.length; i++) {
    const guestName = muslimGuests[i];
    console.log(`Dear ${guestName}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
}
