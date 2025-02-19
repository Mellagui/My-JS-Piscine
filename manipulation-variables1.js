// 1. Manipulating Numbers
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
let sqrt = Math.sqrt(a); // Square root
let power = Math.pow(a, 2); // a^2 = 121
let rounded = Math.round(3.7); // 4

// 2. Manipulating Strings
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

// 3. Manipulating Arrays
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

// 4. Manipulating Objects
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

// 5. Manipulating Booleans
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

// 6. Manipulating Dates
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

// 7. Manipulating Functions
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

// 8. Manipulating Promises
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

// 9. Manipulating Classes (ES6+)
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