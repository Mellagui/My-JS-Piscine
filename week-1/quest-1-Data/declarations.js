import { str, num, bool, undef } from "./primitives.js";

const escapeStr = "`,\\,/,\",'"
const arr = [4,undef,'2'];
const obj = {
    str,
    num,
    bool,
};
const nested = {arr, obj}
// console.log(escapeStr)
// console.log(nested)