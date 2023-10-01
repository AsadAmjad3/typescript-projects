// Define an array of magician's names
const magicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

// Function to show magicians
function show_magicians(magicianNames: string[]): void {
  console.log("Magicians:");
  for (const name of magicianNames) {
    console.log(name);
  }
}

// Call the function and pass the array
show_magicians(magicians);
