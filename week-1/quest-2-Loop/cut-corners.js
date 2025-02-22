const modulo = (nbr) => {
    let mdl = nbr
    while (mdl >= 1) {
        mdl = mdl - 1
    }
    return mdl
};

const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0]

const round = (nbr) => {
    if (nbr === 0 || nbr === Infinity || nbr === -Infinity) return nbr;
    let negative = nbr < 0? true: false;
    nbr = Math.abs(nbr);

    let mdl_ = modulo(nbr)
    
    if ( mdl_ >= 0.5) {
        nbr = nbr - mdl_
        negative && mdl_ == 0.5? nbr: nbr++;
    } else {
        nbr = nbr - mdl_
    }
    return negative? -nbr: nbr;
}
// console.log(nums.map(round), [3, -3, 3, -3, 0])

// console.log(20.51%1)
// console.log(round(-Infinity)); // -Infinity
// console.log(round(-20.51)); // -21
// console.log(round(-20.5)); // -20
// console.log(round(-0.1)); // -0
// console.log(round(-0)); // -0
// console.log(round(20.49)); // 20
// console.log(round(20.5)); // 21
// console.log(round(42)); // 42
// console.log(round(Infinity)); // Infinity

const floor = (nbr) => {
    if (nbr === 0 || nbr === Infinity || nbr === -Infinity) return nbr
    let negative = nbr < 0? true: false;
    nbr = Math.abs(nbr)
    return negative? -((nbr + 1) - modulo(nbr)): nbr - modulo(nbr);
}
// console.log(nums.map(floor), [3, -4, 2, -3, 0])

// console.log(floor(-Infinity)); // -Infinity
// console.log(floor(-45.95)); // -46
// console.log(floor(-45.05)); // -46
// console.log(floor(-0)); // -0
// console.log(floor(0)); // 0
// console.log(floor(4)); // 4
// console.log(floor(45.05)); // 45
// console.log(floor(45.95)); // 45
// console.log(floor(Infinity)); // Infinity

const ceil = (nbr) => {
    if (nbr === 0 || nbr === Infinity || nbr === -Infinity) return nbr
    let negative = nbr < 0? true: false;
    nbr = Math.abs(nbr)
    return negative? -(nbr - modulo(nbr)): modulo(nbr) === 0? nbr: (nbr+1) - modulo(nbr);
}

// console.log(nums.map(ceil), [4, -3, 3, -2, 0])

// console.log(ceil(-Infinity)); // -Infinity
// console.log(ceil("-1.123")); // -7
// console.log(ceil(-4)); // -4
// console.log(ceil(-0.95)); // -0
// console.log(ceil(-0)); // -0
// console.log(ceil(0)); // 0
// console.log(ceil(0.95)); // 1
// console.log(ceil(4)); // 4
// console.log(ceil(7.004)); // 8
// console.log(ceil(Infinity)); // Infinity

const trunc = (nbr) => {
    if (nbr === 0 || nbr === Infinity || nbr === -Infinity) return nbr
    let negative = nbr < 0? true: false;
    nbr = Math.abs(nbr)
    return negative? -(nbr - modulo(nbr)): nbr - modulo(nbr);
}

// console.log(nums.map(trunc), [3, -3, 2, -2, 0])

// console.log(trunc(-Infinity)); // -Infinity
// console.log(trunc("-1.123")); // -1
// console.log(trunc(-0.123)); // -0
// console.log(trunc(-0)); // -0
// console.log(trunc(0)); // 0
// console.log(trunc(0.123)); // 0
// console.log(trunc(13.37)); // 13
// console.log(trunc(42.84)); // 42
// console.log(trunc(Infinity)); // Infinity;