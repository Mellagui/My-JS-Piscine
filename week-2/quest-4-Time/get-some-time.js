const firstDayWeek = (week, year) => {
    const newDate = new Date(year, 0, 1);
    const day = newDate.getDay()
    // newDate.setDate(week*7)
    newDate.setFullYear(year)
    newDate.setUTCMonth(week * 7 / 30)
    // newDate.setMinutes(week * 7 * 24 * 60)

    return newDate.getUTCDay() + '-' + newDate.getUTCMonth() + '-' + newDate.getUTCFullYear()
}

console.log(firstDayWeek(1, '1000'))

console.log(firstDayWeek(1, '1000'), '01-01-1000')

console.log(firstDayWeek(52, '1000'), '22-12-1000')

console.log(firstDayWeek(2, '0001'), '08-01-0001')

console.log(firstDayWeek(43, '1983'), '17-10-1983')

console.log(firstDayWeek(23, '0091'), '04-06-0091')

console.log(firstDayWeek(2, '2017'), '02-01-2017')