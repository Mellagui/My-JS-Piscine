const citiesOnly = (arr) => arr.map(val => val.city)

// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
// ]))

const upperCasingStates = (arr) => arr.map(val => val.split(' ').map(v => v[0].toUpperCase() + v.slice(1)).join(' '))

// console.log(upperCasingStates(['alabama', 'new jersey']))

// °C = (°F - 32) ÷ 1.8
const fahrenheitToCelsius = (arr) => {
  let res = [];
  arr.map(val => {
      res.push(Math.floor((val.slice(0,val.length-2) - 32) / 1.8) + '°C')
  })
  return res
}

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))

const trimTemp = (arr) => arr.map(val => ({
      ...val,
      temperature: val.temperature.replace(/\s/g, '')
}))

const arr = [{ city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },]

console.log(trimTemp(arr)) /* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */

const tempForecasts = (arr) => {
  let res = [];
  arr = trimTemp(arr)
  arr.map(val => {
    val.temperature = fahrenheitToCelsius([val.temperature])[0]
    val.state = upperCasingStates([val.state])[0]
    res.push(val.temperature + 'elsius in ' + val.city + ', ' + val.state)
  })

  return res
}


// console.log(tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },{
//     city: 'Pasna',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ])) // -> ['38°Celsius in Pasadena, California']