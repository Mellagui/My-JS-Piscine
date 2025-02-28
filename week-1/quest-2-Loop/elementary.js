// import { repeat } from "./repeat.js";

const multiply = (a, b) => {
    return (a === 0 || b === 0) && (a < 0 !== b < 0)? -0: (a === 0 || b === 0)? 0: (a === 1)? b: (b === 1)? a: multiplyAlgo(a,b);
}

// a * b
const multiplyAlgo = (a,b) => {
    let negative = a < 0 !== b < 0
    a = Math.abs(a) // a = a < 0? -a: a;
    b = Math.abs(b) // b = b < 0? -b: b;

    let i = 1
    let res = b
    while (i < a) {
        res += b
        i++
    }
    return negative? -res: res;
}

const divide = (a,b) => { // a / b
    return (a === 0 && b === 0)? 'NaN': ( b === 0)? 'Infinity': ( a === 0 && b < 0)? -0: (a === 0)? 0: (a === b)? 1: (b === 1)? a: divideAlgo(a,b);
    // console.log(divide(-3,0)); // -infinty
}

const divideAlgo = (a, b) => {
    let negative = a < 0 !== b < 0
    a = Math.abs(a) // a = a < 0? -a: a;
    b = Math.abs(b) // b = b < 0? -b: b;

    // if a < b => b * 0.1
    let cont_10 = 0
    while ((moduloAlgo(a,b) !== 0 && cont_10 < 9) || a < b ) {
        a = multiply(a,10)
        cont_10++
    }

    let res = 1
    while (a >= b) {
        a -= b
        res++
    }

    let resStr = res.toString()
    let result = ''
    let prefix = ''
    let sufix = ''

    resStr.length < cont_10 ? prefix = '0.': prefix = '0';
    for (let i = 0; i <= cont_10; i++ ) {

        (i < resStr.length - cont_10)? prefix += resStr[i]: (i != resStr.length-1)? sufix += resStr[i]: sufix += resStr[i]-1;
    }
    result = prefix + '.' + sufix
    res = parseFloat(result)

    return negative? -res: res;
}

const moduloAlgo = (a,b) => {
    let negative = a < 0
    a = Math.abs(a) // a = a < 0? -a: a;
    b = Math.abs(b) // b = b < 0? -b: b;
    while (a >= b) {
        a -= b
    }
    return negative? -a: a;
}

const modulo = (a,b) => { // a % b
    return b === 0? 'NaN': a === b || (a === 0 && b !== 0)? 0: moduloAlgo(a,b);
}

console.log(modulo(34,78)); // nan
console.log(divide(1,3)); // 1
console.log(divide(1,1)); // NaN
console.log(divide(-3,1)); // nan
console.log(divide(1,-3)); // 0
console.log(divide(-3,2)); // -1
console.log(divide(3,-2)); // 1
console.log(divide(-3,-2)); // -1
console.log(divide(20,80)); // 8

console.log('rrr')
console.log((34%78)); // NaN
console.log((0/3)); // 0
console.log((0/0)); // NaN
console.log((-3/0)); // NaN
console.log((0/-3)); // 0
console.log((-3/2)); // -0
console.log((3/-2)); // 0
console.log((-3/-2)); // -0
console.log((8/80)); // 0.
// console.log((5/3)); // 3
// console.log(modulo(20,3)); // 3

// console.log('0.'+3) // parse floet
// console.log(divide(2,8))
// console.log(moduloAlgo(2,8))
// console.log((2/8))

// console.log((0%4));
// console.log(modulo(2,3));

// find == return 1 value
// filter == return many values

// foreach == for range any data and make modifications without return any value
// map == for range any data and make modifications on copie of data with return copies

// reduce ==