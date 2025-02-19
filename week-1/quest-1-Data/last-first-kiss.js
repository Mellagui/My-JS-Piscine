import { arryExp } from "./returns.js"

const first = (x) => x[0];
const last = (x) => x[x.length-1];
const kiss = (x) => first(x)+','+last(x);

// console.log(first(arryExp))
// console.log(last(arryExp))
// console.log(kiss(arryExp))