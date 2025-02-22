const mood = "Happy! ";
// method 0: Using String.prototype.repeat()
// console.log(`I feel ${mood.repeat(3)}`);

// method 1:
// const repeat = (str,num) => {
//     let res = [];
//     for (let i = 0; i < num; i++) {
//         res.push([str]);
//     }
//     return res.join(' ')
// }

// method 2: Using Array(num).fill(str).join('')
const repeat = (str,num) => Array(num).fill(str).join('');

// method 3: Using Array.from() and join()
// const repeat = (str,num) => Array.from({length: num}, () => str ).join('')

// method 4: Using Recursion
// const repeat = (str, num) => num <= 0? '': str + repeat(str, num-1);

console.log('i feel',repeat(mood,3));

// Expected output: "I feel Happy! Happy! Happy! "