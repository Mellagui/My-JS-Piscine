const filterShortStateName = (arr) => arr.filter(val => val.length < 7)

// console.log(filterShortStateName([
//     'Alaska',
//     'Hawaii',
//     'Idaho',
//     'Iowa',
//     'Kansas',
//     'Maine',
//     'Nevada',
//     'Ohio',
//     'Oregon',
//     'Texas',
//     'Utah',
//   ]))

const filterStartVowel = (arr) => {
    // const vowel = ['a', 'o', 'i', 'e', 'u'];
    return arr.filter(val => val.match(/^(a|o|i|e|u)/i))
}

// console.log(filterStartVowel([
//     'Alaska',
//     'Hawaii',
//     'Idaho',
//     'Iowa',
//     'Kansas',
//     'Maine',
//     'Nevada',
//     'Ohio',
//     'Oregon',
//     'Texas',
//     'Utah',
//   ]))

const filter5Vowels = (arr) => {
    return arr.filter(val => val.match(/(a|o|i|e|u)/gi) === null || val.match(/(a|o|i|e|u)/gi).length > 4)
}

// console.log(filter5Vowels([
//     'Alaskaaaaa',
//     'Hw',
//     'Idaho',
//     'Iowa',
//     'Kansas',
//     'Maine',
//     'Nevada',
//     'Ohio',
//     'Oregon',
//     'Texas',
//     'Utah',
//   ]))

const filter1DistinctVowel = (arr) => {
    let res = [];
    arr.filter(val => {
        if (val.match(/(a|o|i|e|u)/gi) !== null) {
            res.push(val)
            let matchedVal = val.toLowerCase().match(/(a|o|i|e|u)/g)
            let distinct = matchedVal[0];
            for (let i = 1; i < matchedVal.length; i++) {
                if (distinct !== matchedVal[i]) {
                    res.pop()
                    break
                }
            }
        }
    })
    return res
}

// console.log(filter1DistinctVowel([
//     'Alaskaaaaa',
//     'Hw',
//     'Idaho',
//     'Iowa',
//     'Kansas',
//     'Maine',
//     'Nevada',
//     'Ohio',
//     'Oregon',
//     'Texas',
//     'Utah',
//   ]))

const multiFilter = (arr) => {
    return arr.filter(obj => 
        obj.capital.length > 7 &&
        !(obj.name.match(/^(a|o|i|e|u)/i)) &&
        obj.tag.match(/(a|o|i|e|u)/i) &&
        obj.region != "South"
    )
}

// console.log(multiFilter([
//     { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
//     { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
//     {
//       tag: 'MO',
//       name: 'Missouri',
//       capital: 'Jefferson City',
//       region: 'Midwest',
//     },
//     {
//       tag: 'PA',
//       name: 'Pennsylvania',
//       capital: 'Harrisburg',
//       region: 'Northeast',
//     },
//     {
//       tag: 'RI',
//       name: 'Rhode Island',
//       capital: 'Providence',
//       region: 'Northeast',
//     },
//   ]))