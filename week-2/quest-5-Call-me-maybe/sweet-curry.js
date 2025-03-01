const mult2 = (x) => function (y) {return x * y}

const add3 = (x) => function (y) {return function (z) {return x + y + z}}

const sub4 = (x) => function (y) {return function (z) {return function (s) {return x - y - z - s}}}