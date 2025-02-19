const mood = "Happy! ";

// const repeat = (str,num) => {
//     let res = [];
//     for (let i = 0; i < num; i++) {
//         res.push([str]);
//     }
//     return res.join(' ')
// }
export const repeat = (str,num) => Array(num).fill(str)
// console.log(`I feel ${mood.repeat(3)}`);

// const repeat = (str,num) => `${Array(num).fill(str).join(' ')}`
// console.log('i feel',repeat(mood,3));

// Expected output: "I feel Happy! Happy! Happy! "