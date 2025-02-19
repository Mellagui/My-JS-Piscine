// // // 1. Manipulating Numbers // // //
// You can perform arithmetic operations, comparisons, and more.

// Example:
let a = 10;
let b = 5;

// Arithmetic operations
let sum = a + b; // 15
let difference = a - b; // 5
let product = a * b; // 50
let quotient = a / b; // 2
let remainder = a % b; // 0

// Increment/Decrement
a++; // a = 11
b--; // b = 4

// Math functions
// let sqrt = Math.sqrt(a); // Square root
// let power = Math.pow(a, 2); // a^2 = 121
// let rounded = Math.round(3.7); // 4

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
let str = num1.toString(); // "123.456"

// Fixed decimal places
let fixed = num1.toFixed(2); // "123.46"

// Precision
let precision = num1.toPrecision(4); // "123.5"

// Parse strings to numbers
let parsedInt = parseInt("123"); // 123
let parsedFloat = parseFloat("123.456"); // 123.456






// // // 2. Manipulating Strings // // //
// Strings can be concatenated, sliced, searched, and more.

// Example:
let str1 = "Hello";
let str2 = "World";

// Concatenation
let combined = str1 + " " + str2; // "Hello World"

// Template literals (ES6+)
let greeting = `${str1}, ${str2}!`; // "Hello, World!"

// String methods
let length = str1.length; // 5
let upperCase = str1.toUpperCase(); // "HELLO"
let lowerCase = str2.toLowerCase(); // "world"
let substring = str1.slice(1, 3); // "el" (start index, end index)
let includes = str1.includes("ell"); // true
let replaced = str1.replace("Hello", "Hi"); // "Hi"

// 2. Strings
// Strings are immutable, but you can manipulate them using methods.

// Advanced String Manipulation:
let strX = "Hello, World!";

// Searching
let indeX = strX.indexOf("World"); // 7
let lastIndex = strX.lastIndexOf("o"); // 8
let includeS = strX.includes("Hello"); // true
let startsWith = strX.startsWith("Hello"); // true
let endsWith = strX.endsWith("!"); // true

// Splitting and joining
let split = strX.split(", "); // ["Hello", "World!"]
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
let namE = "Alice";
let agE = 25;

// Multi-line strings
let bio = `
  Name: ${namE}
  Age: ${agE}
`;

// Expressions in template literals
let resulT = `${name} is ${age > 18 ? "an adult" : "a minor"}`;




// 9. Regular Expressions
// Regex is used for pattern matching in strings.

// Advanced Regex Techniques:
let str3 = "Hello, World! 123";

// Matching
let match = str3.match(/\d+/); // ["123"]

// Replacing
let replaceD = str3.replace(/\d+/, "456"); // "Hello, World! 456"

// Testing
let hasNumbers = /\d+/.test(str3); // true







// // // 3. Manipulating Arrays // // //
// Arrays can be modified by adding, removing, or transforming elements.

// Example:
let fruits = ["Apple", "Banana"];

// Add elements
fruits.push("Orange"); // ["Apple", "Banana", "Orange"]
fruits.unshift("Mango"); // ["Mango", "Apple", "Banana", "Orange"]

// Remove elements
fruits.pop(); // Removes "Orange"
fruits.shift(); // Removes "Mango"

// Access elements
let firstFruit = fruits[0]; // "Apple"

// Array methods
let index = fruits.indexOf("Banana"); // 1
let sliced = fruits.slice(1, 2); // ["Banana"]
let mapped = fruits.map(fruit => fruit.toUpperCase()); // ["APPLE", "BANANA"]
let filtered = fruits.filter(fruit => fruit.length > 5); // ["Banana"]

// 3. Arrays
// Arrays are dynamic and have many built-in methods for manipulation.

// Advanced Array Methods:
let numbers = [1, 2, 3, 4, 5];

// Mapping
let squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

// Filtering
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Reducing
let suM = numbers.reduce((acc, num) => acc + num, 0); // 15

// Sorting
let sorted = numbers.sort((a, b) => b - a); // [5, 4, 3, 2, 1]

// Finding
let firstEven = numbers.find(num => num % 2 === 0); // 2
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // 1

// Flattening nested arrays
let nested = [[1, 2], [3, 4], [5]];
let flat = nested.flat(); // [1, 2, 3, 4, 5]

// Destructuring Arrays:
let [A, B, ...rest] = [1, 2, 3, 4, 5];
console.log(A); // 1
console.log(B); // 2
console.log(rest); // [3, 4, 5]







// // // 4. Manipulating Objects // // //
// Objects can be modified by adding, updating, or deleting properties.

// Example:
let person = {
  name: "Alice",
  age: 25
};

// Add/Update properties
person.job = "Developer"; // Add new property
person.age = 26; // Update existing property

// Delete properties
delete person.job; // Removes the "job" property

// Access properties
let name = person.name; // "Alice"
let age = person["age"]; // 26 (bracket notation)

// Object methods
let keys = Object.keys(person); // ["name", "age"]
let values = Object.values(person); // ["Alice", 26]
let entries = Object.entries(person); // [["name", "Alice"], ["age", 26]]

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






// // // 5. Manipulating Booleans // // //
// Booleans can be used in logical operations.

// Example:
let isTrue = true;
let isFalse = false;

// Logical operations
let andResult = isTrue && isFalse; // false
let orResult = isTrue || isFalse; // true
let notResult = !isTrue; // false

// Ternary operator
let result = isTrue ? "Yes" : "No"; // "Yes"







// // // 6. Manipulating Dates // // //
// Dates can be created and manipulated using the Date object.

// Example:
let now = new Date(); // Current date and time

// Get components
let year = now.getFullYear(); // 2023
let month = now.getMonth(); // 0-11 (0 = January)
let day = now.getDate(); // Day of the month

// Set components
now.setFullYear(2024); // Change year to 2024

// Formatting
let formatted = now.toLocaleDateString(); // "10/5/2023" (locale-specific)

// 8. Dates
// Dates can be manipulated extensively.

// Advanced Date Manipulation:
let noW = new Date();

// Adding/subtracting time
noW.setDate(noW.getDate() + 7); // Add 7 days
noW.setHours(noW.getHours() - 2); // Subtract 2 hours

// Formatting with libraries (e.g., `date-fns` or `moment.js`)
import { format } from "date-fns";
let formatteD = format(noW, "yyyy-MM-dd"); // "2023-10-12"







// // // 7. Manipulating Functions // // //
// Functions can be assigned to variables, passed as arguments, or returned.

// Example:
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Arrow function (ES6+)
const greet = (name) => `Hello, ${name}!`;

// Higher-order functions
function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHi = createGreeting("Hi");
console.log(sayHi("Alice")); // "Hi, Alice!"

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








// // // 8. Manipulating Promises // // //
// Promises are used for asynchronous operations.

// Example:
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 2000);
});

fetchData
  .then(data => console.log(data)) // "Data fetched!"
  .catch(error => console.error(error));

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








// // // 9. Manipulating Classes (ES6+) // // //
// Classes allow you to create objects with shared behavior.

// Example:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const alice = new Person("Alice", 25);
console.log(alice.greet()); // "Hello, my name is Alice"

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



// Summary
// Numbers: Arithmetic, Math functions.

// Strings: Concatenation, slicing, searching.

// Arrays: Adding/removing elements, mapping, filtering.

// Objects: Adding/updating/deleting properties.

// Booleans: Logical operations.

// Dates: Getting/setting components, formatting.

// Functions: Assigning, passing, returning.

// Promises: Handling asynchronous operations.

// Classes: Creating objects with shared behavior.