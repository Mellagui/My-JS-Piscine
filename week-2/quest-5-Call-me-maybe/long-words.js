const longWords = (arr) => {
    return arr.every(val => val.length > 4)
}

// const arr = ['fixture', 'oent', 'coincide', 'residential', 'relaxation'];
// console.log(longWords(arr))

const oneLongWord = (arr) => arr.some(val => val.length > 9)

// const arr = ['fixture', 'oent', 'coincide', 'residential', 'relaeation'];
// console.log(oneLongWord(arr))

const noLongWords = (arr) => {
    return arr.every(val => val.length < 8)

}

// const arr = []
// arr.some()

// const arr = ['fixtre', 'oent', 'coinde', 'retial', 'retion'];
// console.log(noLongWords(arr))
