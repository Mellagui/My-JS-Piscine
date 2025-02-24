const rgx = /[\w]*[t][ion][\w]*/gi;
const subRgx = /[ion]/gi;
const ionOut = (str) => str.match(rgx)? str.match(rgx).map((x) => x.replace(subRgx, '')): [];
//     let arr = str.match(rgx);
//     // for (let i = 0; i < arr.length; i++) {
//     //     arr[i] = arr[i].replace(subRgx, '')
//     // }
//     return arr
// }

console.log(ionOut('1A1A1A1A jhkkjh kjkhiontkhjk khkionTh'))