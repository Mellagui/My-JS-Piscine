const isPositive = (nb) => nb > 0? true: false;
const abs = (nb) => nb < 0? -nb: nb;

const nb = 3;
const nb2 = -3;
const nb3 = 0;

console.log(isPositive(nb))
console.log(isPositive(nb2))
console.log(isPositive(nb3))