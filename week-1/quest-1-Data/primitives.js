const str = 'String'
const num = 0
const bool = false
const undef = undefined

console.log(str,'\n',num,'\n',bool,'\n',undef)

/////////////////////////////////////////////////////////////////////////////////

// if you need to have a quote in a string you can escape it with a backslash \
console.log("It's time to escape !!")
console.log('Hello' + 'World!')
console.log('Hello\nWorld!')
console.log(`Hello
World!`)

// You may mix types, but results may not be what you expect
console.log('21' + 21)
console.log('21' * 2)
console.log('21' * true) // true is cooerced to be the number 1
console.log('21' * false) // false become the number 0

// When javascript can't compute a number it returns NaN (stands for 'Not a Number')
console.log(NaN)
console.log('21' * 'pouet')

// Infinity is another special number
console.log(Infinity)
console.log(1 / 0)
console.log(-Infinity) // it can be negative
console.log(-1 / 0)

// Comparaisons always return a boolean :

// Equality is ===
console.log(1 === 1) // true
console.log(1 === 2) // false

// Inequality is !==
console.log(1 !== 1) // = false
console.log(1 !== 2) // = true

// and it works for strings
console.log('a' < 'b') // = true
console.log('aba' < 'abc') // = true

// THE MORE YOU KNOW :

// Non boolean values are either 'truthy' or 'falsy'
console.log(!0) // = true
console.log(!1) // = false
console.log(!123) // = false
console.log(!'') // = true
console.log(!'pouet') // = false

// Type coercion is performed for comparisons with double equals...
console.log('5' == 5) // = true
console.log(null == undefined) // = true

// ...avoid loosing your hairs and you use the strict === instead... please...
console.log('5' === 5) // = false
console.log(null === undefined) // = false

// JavaScript has one number type (which is a 64-bit IEEE 754 double).
// Doubles have a 52-bit mantissa, which is enough to store integers
// up to about 9✕10¹⁵ precisely.

// Float have limited precision, this is why :
console.log(0.1 + 0.2) // is not precisly 0.3 but 0.30000000000000004

//////////////////////////////////////////////////////////////////////////

/*
  Variables
*/
// A variable allow you to store any values at the given identifier
// To achieve such a feat we first need to declare our variable
// We do that using the keyword `let` and then pick an identifier of our liking

let pouet

// Now the identifier pouet can be use in the rest of my code
// but we didn't gave any value to our variable so showing it's value
// will output undefined :

console.log(pouet)

// to assign a value to it, we use a simple =

pouet = 42

// Great, our variable identified by `pouet` now has the number 42 for value
// let's see what is showed now :

console.log(pouet)

// I can re assign the value of my variable just like we did before :
pouet = 'hehe'
console.log(pouet) // the same line of code now show the new value

// Valid identifiers can only contain: number, $, caps letter (A-Z),
// normal letter (a-z) and undescore `_`
let POUET_pouet // valid
let pouet4 // valid

// but POUET-pouet and 4pouet would be invalid identifers
// In JavaScript, it's standard to use camelCase for identifers
// since we can't use - as separator

// You can not use a variable before it's declaration
// You can do both the declaration and the assignation in one line:

let yo = 'lo'
// Here, we set the string value 'lo' to the variable identified by yo

/*
  Constant variables
*/

// Since in most cases we don't want the value of our variables to change
// It's better to use constant variables, using 'const' instead of 'let'

const isConstant = true
// Here, we set the boolean true value
// to the constant variable identified by 'isConstant'

// now we protected our variable against re-assignement

// There's shorthand for performing math operations on variables:
someVar += 5 // equivalent to someVar = someVar + 5 someVar is 10 now
someVar *= 10 // now someVar is 100