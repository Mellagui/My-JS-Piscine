// 1. Numbers
// JavaScript numbers are 64-bit floating-point numbers. You can perform advanced mathematical operations and use built-in methods.

// Advanced Math Operations:
let num = 10.567;

// Rounding
let rounded = Math.round(num); // 11
let floor = Math.floor(num); // 10
let ceil = Math.ceil(num); // 11

// Random numbers
let random = Math.random(); // Random number between 0 and 1
let randomInRange = Math.floor(Math.random() * 100); // Random integer between 0 and 99

// Exponents and roots
let squareRoot = Math.sqrt(num); // 3.25
let cubeRoot = Math.cbrt(num); // 2.24
let power = Math.pow(num, 2); // 111.63

// Trigonometric functions
let sine = Math.sin(Math.PI / 2); // 1
let cosine = Math.cos(Math.PI); // -1

// Number Methods:
let num1 = 123.456;

// Convert to string
let str1 = num1.toString(); // "123.456"

// Fixed decimal places
let fixed = num1.toFixed(2); // "123.46"

// Precision
let precision = num1.toPrecision(4); // "123.5"

// Parse strings to numbers
let parsedInt = parseInt("123"); // 123
let parsedFloat = parseFloat("123.456"); // 123.456

// 2. Strings
// Strings are immutable, but you can manipulate them using methods.

// Advanced String Manipulation:
let str2 = "Hello, World!";

// Searching
let index = str2.indexOf("World"); // 7
let lastIndex = str2.lastIndexOf("o"); // 8
let includes = str2.includes("Hello"); // true
let startsWith = str2.startsWith("Hello"); // true
let endsWith = str2.endsWith("!"); // true

// Splitting and joining
let split = str2.split(", "); // ["Hello", "World!"]
let joined = split.join(" - "); // "Hello - World!"

// Trimming whitespace
let padded = "   Hello   ";
let trimmed = padded.trim(); // "Hello"

// Repeating
let repeated = "Ha".repeat(3); // "HaHaHa"

// Unicode and code points
let charCode = str2.charCodeAt(0); // 72 (Unicode for 'H')
let fromCharCode = String.fromCharCode(72); // "H"

// Template Literals (ES6+):
let name = "Alice";
let age = 25;

// Multi-line strings
let bio = `
  Name: ${name}
  Age: ${age}
`;

// Expressions in template literals
let result = `${name} is ${age > 18 ? "an adult" : "a minor"}`;

// 3. Arrays
// Arrays are dynamic and have many built-in methods for manipulation.

// Advanced Array Methods:
let numbers = [1, 2, 3, 4, 5];

// Mapping
let squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

// Filtering
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Reducing
let sum = numbers.reduce((acc, num) => acc + num, 0); // 15

// Sorting
let sorted = numbers.sort((a, b) => b - a); // [5, 4, 3, 2, 1]

// Finding
let firstEven = numbers.find(num => num % 2 === 0); // 2
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // 1

// Flattening nested arrays
let nested = [[1, 2], [3, 4], [5]];
let flat = nested.flat(); // [1, 2, 3, 4, 5]

// Destructuring Arrays:
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// 4. Objects
// Objects are key-value pairs and can be deeply nested.

// Advanced Object Manipulation:
let person = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345"
  }
};

// Deep cloning (avoiding reference issues)
let clone = JSON.parse(JSON.stringify(person));

// Merging objects
let details = { job: "Developer" };
let merged = { ...person, ...details }; // Spread operator

// Dynamic property names
let key = "name";
let value = person[key]; // "Alice"

// Object iteration
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Prototype manipulation
let animal = { eats: true };
let rabbit = Object.create(animal);
console.log(rabbit.eats); // true

// 5. Functions
// Functions are first-class citizens in JavaScript.

// Advanced Function Techniques:
// Higher-order functions
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

let double = createMultiplier(2);
console.log(double(5)); // 10

// Closures
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

// Immediately Invoked Function Expressions (IIFE)
(function() {
  console.log("IIFE executed!");
})();

// 6. Promises and Async/Await
// Promises handle asynchronous operations.

// Advanced Promise Techniques:
// Chaining promises
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Promise.all (run multiple promises in parallel)
let promises = [fetch(url1), fetch(url2), fetch(url3)];
Promise.all(promises)
  .then(responses => responses.forEach(res => console.log(res)));

// 7. Classes and Inheritance
// Classes allow object-oriented programming.

// Advanced Class Techniques:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

let dog = new Dog("Rex", "German Shepherd");
dog.speak(); // "Rex barks!"

// 8. Dates
// Dates can be manipulated extensively.

// Advanced Date Manipulation:
let now = new Date();

// Adding/subtracting time
now.setDate(now.getDate() + 7); // Add 7 days
now.setHours(now.getHours() - 2); // Subtract 2 hours

// Formatting with libraries (e.g., `date-fns` or `moment.js`)
import { format } from "date-fns";
let formatted = format(now, "yyyy-MM-dd"); // "2023-10-12"

// 9. Regular Expressions
// Regex is used for pattern matching in strings.

// Advanced Regex Techniques:
let str3 = "Hello, World! 123";

// Matching
let match = str3.match(/\d+/); // ["123"]

// Replacing
let replaced = str3.replace(/\d+/, "456"); // "Hello, World! 456"

// Testing
let hasNumbers = /\d+/.test(str3); // true