const sign = (nb) => nb === 0? 0: nb > 0? 1: -1;
const sameSign = (x, y) => x === y? true: (sign(x) === 0? 1: sign(x)) === (sign(y) === 0? 1: sign(y))? true: false;


const nb = 0;
const nb2 = 0;
const nb3 = 0;

console.log(sameSign(nb,nb2))