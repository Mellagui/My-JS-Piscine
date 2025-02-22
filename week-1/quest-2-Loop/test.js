const slicerr = (animals, from, to) => {

    if (from > to || from > animals.length-1) return [];

    if (typeof animals === "string") {
        return animals.substring(from,to);

    } else if (Array.isArray(animals)) {

        if (to === undefined || to > animals.length -1) return animals.splice(from);
        
        // animals.splice(from)
        return animals.splice(from, to-from)

        // let    arr = animals.reverse().splice(animals.length-1 - to);
        // arr = animals.reverse().splice(from);
        // return arr
    }
    return '\n'

};
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(-4,3))
console.log(slicerr(animals, -4,3))
