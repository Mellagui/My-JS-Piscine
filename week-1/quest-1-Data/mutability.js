const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const clone1 = Object.assign({},person); // assign to any object [Copie of object] // object.entries(objectName) return object with type arry
clone1.age++
clone1.country = 'FR'
const clone2 = {...person}; // assign to any object [Copie of object]
clone2.age++
clone2.country = 'FR'
const samePerson = {...person}; // assign to any object [Copie of object]
samePerson.age++
samePerson.country = 'FR'

// console.log(clone1,clone2,samePerson)