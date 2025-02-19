const slicer = (animals, from, to) => {

    let result = [];

    if (animals === undefined) return 'trying slice empty animals'
    if (from === undefined) return animals
    if (from < 0 && to !== undefined) return result
    if (to === undefined) {
        for (let i = from; i < animals.length; i++) {
            result.push(animals[i])
        }
        return result
    }

    if (from < 0) {
        let startIndex = animals.length + from;
        if (startIndex < 0) startIndex = 0; // Ensure startIndex is not negative
        console.log(startIndex)
        // console.log('rrr')
        for (let i = startIndex; i < animals.length; i++) {
            result.push(animals[i])
        }
        return result
    }

    if (to < 0) {
        for (let i = from; i < animals.length + to; i++) {
            result.push(animals[i])
        }
        return result
    }

    for (let i = from; i < to; i++) {
        result.push(animals[i])
    }

    return result
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slicer(animals, -2))
console.log(animals.slice( -2))