function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with three city-country pairs
const result1 = city_country("Lahore", "Pakistan");
const result2 = city_country("New York", "USA");
const result3 = city_country("Paris", "France");

// Print the returned values
console.log(result1);
console.log(result2);
console.log(result3);
