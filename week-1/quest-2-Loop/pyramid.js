const pyramid = (str, nbr) => {
    let res = [];
    let x = 1;
    while (x <= nbr) {
        if (res.length === 0) {
            res.push(Array(nbr-x).fill(' ').join('') + str)
            x++
            continue
        }
        res.push(Array(nbr-x).fill(' ').join('') + Array(x-1).fill('*').join('') + str + Array(x-1).fill('*').join(''))
        x++
    }
    return res.join('\n')
}

console.log(pyramid('*', 5))