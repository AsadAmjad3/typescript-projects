function create_car(
  manufacturer: string,
  model: string,
  ...options: { [key: string]: any }[]
): object {
  const car: { manufacturer: string; model: string; [key: string]: any } = {
    manufacturer,
    model,
  };

  for (const option of options) {
    const key = Object.keys(option)[0];
    const value = option[key];
    car[key] = value;
  }

  return car;
}

// Call the function with required information and additional options
const carInfo = create_car(
  "Toyota",
  "Camry",
  { color: "Blue" },
  { year: 2022 },
  { sunroof: true }
);

// Print the returned object
console.log(carInfo);
