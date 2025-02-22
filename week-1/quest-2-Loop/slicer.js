const slicerr = (animals, from, to) => {
    if (from > to || from > animals.length-1) return [];

    if (to > animals.length -1) {
        to = animals.length-1
    }

    if (typeof animals === "string") {
        return animals.substring(from,to);
    } else if (Array.isArray(animals)) {
        if (to === undefined || to > animals.length -1) return animals.splice(from);
        while (animals.length-1 >= to - from) {
            animals.pop()
        }

        let    arr = animals.reverse().splice(animals.length-1 - to);
        arr = animals.reverse().splice(from);
        return arr
    }
    return '\n'

};


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2,5))
console.log(slicerr(animals, 2 , 5))
// const animals = 'ant ison camel duck elephant';
// console.log(animals.splice(2))



// const slicer = (animals, from, to) => {

//     let result = [];

//     if (animals === undefined) return 'trying slice empty animals'
//     if (from === undefined) return animals
//     if (from < 0 && to !== undefined) return result
//     if (to === undefined) {
//         for (let i = from; i < animals.length; i++) {
//             result.push(animals[i])
//         }
//         return result
//     }

//     if (from < 0) {
//         let startIndex = animals.length + from;
//         if (startIndex < 0) startIndex = 0; // Ensure startIndex is not negative
//         console.log(startIndex)
//         // console.log('rrr')
//         for (let i = startIndex; i < animals.length; i++) {
//             result.push(animals[i])
//         }
//         return result
//     }

//     if (to < 0) {
//         for (let i = from; i < animals.length + to; i++) {
//             result.push(animals[i])
//         }
//         return result
//     }

//     for (let i = from; i < to; i++) {
//         result.push(animals[i])
//     }

//     return result
// }