// Math Object
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(64)); // 8
console.log(Math.pow(2, 5)); // 32
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.round(4.5)); // 5



// Date Object
let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth() + 1); // Months start from 0
console.log(today.getDay()); // 0 = Sunday

// JSON Object
let person = {
  name: "Alice",
  age: 25,
};

// Convert object to JSON
let jsonData = JSON.stringify(person);

console.log(jsonData);

// Convert JSON to object
let obj = JSON.parse(jsonData);

console.log(obj.name);

// RegEXp Object
let pattern = /cat/;

console.log(pattern.test("I have a cat")); // true
console.log(pattern.test("I have a dog")); // false

// Boolean Object
let value = true;

console.log(value);
console.log(value.toString()); // "true"

// Error Object
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error.message);
}
