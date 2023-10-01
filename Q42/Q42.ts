// Define an array of magicianNames's names
const magicianNames: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

// Function to show magicianNames
function showmagician(magicianNames: string[]): void {
  console.log("Magicians:");
  for (const name of magicianNames) {
    console.log(name);
  }
}

// Function to make magicianNames great
function make_great(magicianNames: string[]): string[] {
  const greatMagicians: string[] = [];

  for (const name of magicianNames) {
    greatMagicians.push(`${name} the Great`);
  }

  return greatMagicians;
}

// Add "the Great" to each magicianNames's name
const greatMagicians = make_great(magicianNames);

// Call the function to show the modified list
showmagician(greatMagicians);
