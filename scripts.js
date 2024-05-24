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