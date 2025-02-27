const epoch = new Date('0001-01-01')
// console.log(date);

// console.log(timeTravel('0001-01-01'));
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];

const msPerDay = 24 * 60 * 60 * 1000;

const addWeek = (date) => days[((date - epoch ) / msPerDay) % 14];

// return days[date.getUTCDate()]
// return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][date.getUTCDay()]

const timeTravel = (date, hour, minute, second) => new Date(date).setHours(hour, minute, second)
//     const newDate = new Date(date);
//     return newDate.setHours(hour, minute, second);
// }

console.log(addWeek(new Date('1500-01-02'))) // Output: Monday
console.log(addWeek(new Date('0001-02-02'))) // Output: Tuesday
console.log(addWeek(new Date('2025-02-25'))) // Output: Sunday
console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday

// timeTravel({ date, hour, minute, second })

timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  })

// Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)