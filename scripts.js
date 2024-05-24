// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Logging each name and province to the console
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Create a new array of province names
const provincesUpperCase = provinces.map(province => province.toUpperCase());
console.log(provincesUpperCase);

// Create a new array that contains the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sort the provinces alphabetically
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Filter provinces containing "Cape"
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Create a boolean array to determine if a name contains the letter 'S'
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// Transform the names array into an object mapping names to their respective provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);


// log products
console.log(
  "Products:",
  products.forEach((product) => console.log(product.product))
);

// Filter prodcts by name length
console.log(
  "Filtered Products by Name Length:",
  products.filter((product) => product.product.length <= 5)
);

// Filter out products without prices, convert string prices to numbers, and calculate the total price
console.log(
  "Total Price:",
  products
    .filter((product) => product.price.trim() !== "")
    .reduce((total, product) => total + Number(product.price), 0)
);

// Concatenate all product names into a single string
console.log(
  "Concatenated Product Names:",
  products.reduce((names, product) => names + product.product, "")
);

// Identify the highest and lowest-priced items
const validPrices = products
  .filter((product) => product.price.trim() !== "")
  .map((product) => Number(product.price));
const highestPrice = Math.max(...validPrices);
const lowestPrice = Math.min(...validPrices);
const highestProduct = products.find(
  (product) => Number(product.price) === highestPrice
).product;
const lowestProduct = products.find(
  (product) => Number(product.price) === lowestPrice
).product;
console.log(`Highest: ${highestProduct}. Lowest: ${lowestProduct}`);
