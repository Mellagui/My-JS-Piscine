// is.num: value is a number.
// is.nan: value is NaN.
// is.str: value is a string.
// is.bool: value is a boolean.
// is.undef: value is undefined.
// is.def: value is defined.
// is.arr: value is an array.
// is.obj: value is a simple object or null objects.
// is.fun: value is a function.
// is.truthy: value is truthy.
// is.falsy: value is falsy.

const is = {}

is.num = (x) => typeof x === 'number'? true: false;
is.nan = (x) => typeof x === NaN? true: false;
is.str = (x) => typeof x === 'string'? true: false;
is.bool = (x) => typeof x === 'boolean'? true: false;
is.undef = (x) => typeof x === undefined? true: false;
is.def = (x) => typeof x === 'defined'? true: false;
is.arr = (x) => Array.isArray(x);
is.obj = (x) => typeof x === 'object'? true: false;
is.fun = (x) => typeof x === 'function'? true: false;
is.truthy = (x) => typeof x === 'truthy'? true: false;
is.falsy = (x) => typeof x === 'falsy'? true: false;


console.log(is.num(5))
console.log(is.nan('rrr'))
console.log(is.str('r')) 
console.log(is.bool(false)) 
console.log(is.undef('/'))
console.log(is.def('r')) 
console.log(is.arr([1,2,3])) 
console.log(is.obj({a:1}))
console.log(is.fun(function(){})) 
// console.log(is.truthy()) 
// console.log(is.falsy()) 