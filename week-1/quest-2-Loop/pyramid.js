const pyramid = (str, nbr) => {
    let res = [];
    let x = 1;
    while (x <= nbr) {
        if (res.length === 0) {
            res.push(Array((nbr*str.length)-x*str.length).fill(' ').join('') + str)
            x++
            continue
        }
        res.push(Array((nbr*str.length)-x*str.length).fill(' ').join('') + Array(x-1).fill(str).join('') + str + Array(x-1).fill(str).join(''))
        x++
    }
    return res.join('\n')
}

console.log(pyramid('*', 5))