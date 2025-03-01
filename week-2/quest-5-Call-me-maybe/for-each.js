const forEach = (arr, func) => {
    // const iterator = arr.values();
    for (const val of arr.values()) {
        func(val)
    }
    // return arr.evrey(val => func(val))
}

let arr = ['TA','OA','KA','YA','OA']

// const funcMain = val => console.log(val)
const funcMain = val => val.toLowerCase()


const oneMin = (ele) => {
    console.log(ele.toLowerCase())
}
forEach(arr, oneMin)

console.log(arr)