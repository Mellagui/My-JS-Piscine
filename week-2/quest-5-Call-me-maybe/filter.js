const filter = (arr, func) => {
    let res = [];
    let index = 0;
    for (const val of arr.values()) {
        if (func(val, index, arr)) res.push(val);
        index++
    }
    return res
}

const reject = (arr, func) => {
    let res = [];
    let index = 0;
    for (const val of arr.values()) {
        if (!func(val, index, arr)) res.push(val);
        index++
    }
    return res
}

const partition = (arr, func) => [filter(arr, func), reject(arr, func)]


// const arr = [1, 2, 3, 4, 5, 6, 11 ,13]

// console.log(filter(arr, (x) =>  x < 10))
// console.log(reject(arr, (x) => x < 10))
// console.log(partition(arr, (x) => x < 10))
