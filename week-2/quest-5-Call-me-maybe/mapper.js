const map = (arr, func) => {
    let res = [];
    let index = 0;
    for (const val of arr.values()) {
        res.push(func(val, index, arr))
        // console.log(func(val, index, arr))
        index++
    }
    return res
}

// let arr = [[1, 2, 3], [4, 5, [12, 15]], 9, 0]

// console.log(arr.flatMap((x) =>  x * 10))

// const funcMain = val => console.log(val)
// const funcMain = val => val.toLowerCase()


// const oneMin = (ele) => {
//     console.log(ele.toLowerCase())
// }

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]

// console.log(array1)

const flatMap = (arr, func) => {
    let index = 0;
    let res = [];
    for (const val of arr.values()) {
        res.push(func(val, index, arr))
        index++
    }

    let rr = [];
    for (const val of res.values()) {
        if (Array.isArray(val)) {
            for (const v of val.values()) {
                rr.push(v)
            }
            continue
        }
        rr.push(val)
    }

    return rr
}

// console.log(flatMap(arr, (x) => x * 10))

// console.log(arr)