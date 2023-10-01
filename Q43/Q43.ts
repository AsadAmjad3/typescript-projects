// Define an array of magician's names
const magician: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

// Function to show magicians
function showmagicians(magicianNames: string[]): void {
  console.log("Magician:");
  for (const name of magicianNames) {
    console.log(name);
  }
}

// Function to make magicians great without modifying the original array
function makegreat(magicianNames: string[]): string[] {
  const greatMagician: string[] = [];

  for (const name of magicianNames) {
    greatMagician.push(`${name} the Great`);
  }

  return greatMagician;
}

// Create a copy of the original array
const originalMagicians = [...magician];

// Call makegreat() with the copy to create a new array
const greatMagician = makegreat(originalMagicians);

// Call the function to show the original and modified arrays
showmagicians(originalMagicians);
showmagicians(greatMagician);
