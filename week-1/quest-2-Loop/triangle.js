const triangle = (str, nbr) => {
    let res = [];
    let x = 1;
    while (x <= nbr) {
        if (res.length === 0) {
            res.push(str)
            x++
            continue
        }
        res.push(str + Array(x-1).fill('*').join(''))
        x++
    }
    return res.join('\n')
}

console.log(triangle('*',5))