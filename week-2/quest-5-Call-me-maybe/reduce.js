const fold = (arr , func, initVal = 0) => {
    for (const val of arr.values()) {
        initVal = func(initVal, val)
    }
    return initVal
}

const foldRight = (arr , func, initVal = 0) => {
    for (let i = arr.length-1; i >= 0; i-- ) {
        initVal = func(initVal, arr[i])
    }
    return initVal
}

const reduce = (arr , func, initVal) => {
    if (initVal === undefined && typeof initVal !== 'string') initVal = 0
    for (const val of arr.values()) {
        initVal = func(initVal, val)
    }
    return initVal
}

const reduceRight = (arr , func, initVal) => {
    if (initVal === undefined && typeof initVal !== 'string') initVal = 0
    for (let i = arr.length-1; i >= 0; i-- ) {
        initVal = func(initVal, arr[i])
    }
    return initVal
}

// const adder = (a, b) => a + b
// console.log(fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3)
// console.log(foldRight([3, 10, 26, 0], adder, 0)) // returns 8 (2 + 3 + 2 + 1)
// console.log(reduce([1, 2, 3], adder)) // returns 6 (1 + 2 + 3)
// console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1)