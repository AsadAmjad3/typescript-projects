// Set a value for the variable age
const personAge: number = 25;

// Determine the person's stage of life based on age
if (personAge < 2) {
  console.log("The person is a baby.");
} else if (personAge >= 2 && personAge < 4) {
  console.log("The person is a toddler.");
} else if (personAge >= 4 && personAge < 13) {
  console.log("The person is a kid.");
} else if (personAge >= 13 && personAge < 20) {
  console.log("The person is a teenager.");
} else if (personAge >= 20 && personAge < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
