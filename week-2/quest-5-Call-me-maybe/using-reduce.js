const adder = (arr) => arr.reduce((acc, val) => acc + val)

// const arr = [1, 2, 3, 5, 8];
// console.log(adder(arr))

const sumOrMul = (arr, initVal = 0) => {
    // let init = init
    return arr.reduce((acc, val) => {
        // if (acc == 0)
        // console.log(acc)
        if (val % 2 == 0) {
            return acc * val
        }
        return acc + val
    }, initVal)
}

// const arr = [1, 2, 3, 5, 8];
// console.log(sumOrMul(arr, 5))

const funcExec = (arrFn,initVal = 0) => {
    return arrFn.reduce((acc, val) => {
        val(acc)
    }, initVal)
}
 

// const arr = [1, 2, 3, 5, 8];
// console.log(funcExec(adder, sumOrMul))

// const rgx = /\d/ig;
// console.log(rgx instanceof RegExp)
