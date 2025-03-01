// (n) => n >= 10
// const small = [3, 6, 1, 7, 2]
// const mixed = [23, 4, 10, 25, 6]
// const big = [43, 30, 16, 57, 10]

const every = (arr, func) => {
    let res = true
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            res = false
            break
        }
    }
    return res
}

// console.log(every(small, (n) => n >= 10))
// console.log(every(mixed, (n) => n >= 10))
// console.log(every(big, (n) => n >= 10))

const some = (arr, func) => {
    let res = false
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res = true
            break
        }
    }
    return res
}

// console.log(some(small, (n) => n >= 10))
// console.log(some(mixed, (n) => n >= 10))
// console.log(some(big, (n) => n >= 10))

const none = (arr, func) => {
    let res = true
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res = false
            break
        }
    }
    return res
}