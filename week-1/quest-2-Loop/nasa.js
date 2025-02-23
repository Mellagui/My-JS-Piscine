const nasa = (n) => {
    let x = 1;
    let str = '';
    while (x <= n) {
        x % 3 === 0 && x % 5 === 0? str += 'NASA': x % 5 === 0? str += 'SA': x % 3 === 0? str += 'NA': x % 3 !== 0 && x % 5 !== 0? str += x: null;
        x !== n? str += ' ': null;
        ++x
    }
    return str
}
console.log(nasa(15))
console.log('1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA')