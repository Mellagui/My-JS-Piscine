// const rgx1 = /[0-9]/gi;
// const rgx2 = /[a-z]/gi;

const sameAmount = (str, rgx1, rgx2) => str.match(rgx1).length === str.match(rgx2).length? true: false;

// console.log(sameAmount('1A1A1A13A', rgx1, rgx2))

console.log(sameAmount('hello how are you', /l/, /e/))
console.log(sameAmount('hello how are you', /h/, /e/))
console.log(sameAmount('hello how are you', /he/, /ho/))

// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

// console.log(sameAmount(data, /i/, /p/))
// console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
// console.log(sameAmount(data, /fs[^q]/, /q /))
// console.log(sameAmount(data, /^[qs]/, /^[gq]/))
// console.log(sameAmount(data, /j/, /w/))
// console.log(sameAmount(data, /fs./, /jn./))

