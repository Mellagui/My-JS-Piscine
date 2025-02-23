
const indexOf = (arr,val) => {
    return arr.findIndex((arr) => arr === val);
    // return arr.findIndex(element => element === val) !== -1? arr.findIndex(element => element === val): -1;
}

const lastIndexOf = (arr,val) => {
    // return arr.findLastIndex((arr) => arr === val);
    
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] === val) return i
    }
    return -1
}

const includes = (arr,val) => {
    return arr.findIndex(element => element === val) !== -1? true: false;
}

const arr = ['hello', 'world', 'hi', 'mellagui', 'hello', 'world'];
const val = 'world';

// console.log(Array(2).fill([...val]))

console.log(indexOf(arr, val));
console.log(lastIndexOf(arr, val));
// console.log(includes(arr, val));
