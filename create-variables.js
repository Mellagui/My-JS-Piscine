function testVar() {
  if (true) {
    var x = 10; // Function-scoped
  }
  console.log(x); // Works, x is accessible
}

function testLet() {
  if (true) {
    let y = 20; // Block-scoped
  }
  console.log(y); // Error: y is not defined
}

testVar(); // Output: 10
// testLet(); // Throws an error

var c = 1;
var c = 2; // Works, no error

let d = 1;
// let d = 2; // Error: Identifier 'd' has already been declared
d = 1; // Works, d is accessible


// ---- Global Object Property
var e = 10;
console.log(window.e); // 10

let f = 20;
console.log(window.f); // undefined


// 1. Using var (Legacy)
// Function-scoped (not block-scoped).

// Hoisted to the top of its scope.

// Can be re-declared and updated.

// Example:
var name = "Alice"; // Declare and initialize
var age = 25; 
var name = "Bob"; // Re-declaration allowed (not recommended)

// 2. Using let (ES6+)
// Block-scoped (e.g., inside {}).

// Can be updated but not re-declared in the same scope.

// Hoisted but not initialized (temporal dead zone).

// Example:
let score = 100;
score = 200; // Allowed (reassignment)
let message = "Hello";

if (true) {
  let score = 300; // New scope, different variable
}

// 3. Using const (ES6+)
// Block-scoped.

// Cannot be re-declared or re-assigned after initialization.

// Must be initialized during declaration.

// Works for objects/arrays (their properties can still be modified).

// Example:
const PI = 3.14159;
const user = { name: "Alice" };
user.name = "Bob"; // Allowed (object property change)
user = {}; // Error: Reassignment not allowed

// 4. No Keyword (Not Recommended!)
// Creates a global variable (even in strict mode).

// Avoid this due to potential side effects.

// Example:
x = 10; // Global variable (use strict mode to block this)

// 5. Destructuring Assignment (ES6+)
// Declare variables by extracting values from arrays/objects.

// Array Example:
const [a, b] = [1, 2]; // a=1, b=2
let [x, y] = [3, 4];

// Object Example:
const { name, age } = { name: "Alice", age: 30 };

// 6. Multiple Declarations in One Line
// Separate variables with commas (works for var, let, const).

// Example:
let n = 1, t = 2, c = 3;
const ID = "123", API_KEY = "xyz";

// Key Notes:
// Scope: var (function) vs. let/const (block).

// Reassignment: Use let if the variable will change; use const by default.

// Hoisting: var is initialized as undefined; let/const are not initialized.

// Best Practice: Prefer const > let > avoid var.
