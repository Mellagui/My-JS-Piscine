


const citiesOnly = (arr) => {
    arr.map((val) => {
        console.log(val.city)
    })
}


citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ])

const upperCasingStates = (arr) => {
    arr.map((val) => {
        val = [...val][0].toUpperCase() + val.slice(1)
        console.log(val) 
    })
}

upperCasingStates(['alabama', 'new jersey'])


// °C = (°F - 32) ÷ 1.8
const fahrenheitToCelsius = (arr) => {
  arr.map(val => {
    console.log(Math.round((val.slice(0,val.length-2) - 32) / 1.8))
  })
}

fahrenheitToCelsius(['68°F', '59°F', '25°F'])

const trimTemp = (arr) => {

}

trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]) /* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */