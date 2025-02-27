// isValid: accepts a Date, and returns false if the Date is invalid.
const isValid = (date) => Date.parse(date) === NaN? true: false;
// console.log(isValid("02/30/2014"))
// console.log("02/30/2014")

// isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
const isAfter = (date1, date2) => date1 > date2? true: false;

// isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
const isBefore = (date1, date2) => date2 > date1? true: false;

// isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
const isFuture = (date) => Date.parse(date)? date > Date()? true: false: false;
// const time = Date()
// console.log(time)

// isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
const isPast = (date) => Date.parse(date)? Date() > date? true: false: false;

// is the date a valid date?
const invalid = (callback, ary = 1) => {
    for (const s of [
      `new Date('')`,
      `new Date(NaN)`,
      `''`,
      `2013-01-01`,
      `NaN`,
    ]) {
      if (callback(...Array(ary).fill(eval(s)))) {
        throw Error(`${callback.name}(${s}) should be false`)
      }
    }
}

// isValid
console.log(!invalid(isValid))
console.log(isValid(new Date()))
console.log(isValid(Date.now()))
console.log(isValid(new Date('December 17, 1995 03:24:00')))
console.log(isValid(new Date(1488370835081)))
console.log(isValid(new Date('1995-12-17T03:24:00')))
console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))

// isAfter
console.log(!invalid(isAfter, 2))
console.log(!isAfter(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(!isAfter(new Date('2157-11-07'), new Date('2183-04-16')))
console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))
console.log(isAfter(123123, 526))

// isBefore
console.log(!invalid(isBefore, 2))
console.log(!isBefore(new Date(2321, 11, 21), new Date(Date.now())))
console.log(!isBefore(123123, 526))
console.log(isBefore(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(isBefore(new Date('2157-11-07'), new Date('2183-04-16')))

// isFuture
console.log(!invalid(isFuture))
console.log(!isFuture(new Date('1992-01-01')))
console.log(!isFuture(new Date(Date.now() - 1)))
console.log(isFuture(new Date(2077, 11, 31)))
console.log(isFuture(new Date(Date.now() + 1)))

// isPast
console.log(!invalid(isPast))
console.log(!isPast(new Date(Date.now() + 1)))
console.log(!isPast(new Date(2077, 11, 31)))
console.log(isPast(new Date(1442, 11, 31)))
console.log(isPast(new Date(Date.now() - 1)))