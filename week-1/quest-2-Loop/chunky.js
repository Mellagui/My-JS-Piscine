const chunk = (arr, nb) => {
    let result = [[]];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i])
        if ((i !==  0 && res.length % nb === 0) || i === arr.length-1) {
            result[0].length === 0? result[0] = res: result.push(res);
            res = [];
        }
    }
    return result
}

console.log(chunk(['a', 'b', 'c', 'd'], 2) == [['a', 'b'], ['c', 'd']])
console.log(chunk(['a', 'b', 'c', 'd'], 3) == [['a', 'b', 'c'], ['d']])

const arr = ['A','A','A','A','A'];
// console.log(chunk(arr,2))