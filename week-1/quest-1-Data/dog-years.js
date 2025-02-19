const obj = {
    earth: 31557600 / (1/1),
    mercury: 31557600 / (1 / 0.2408467),
    venus:31557600 / (1 / 0.61519726),
    mars: 31557600 / (1 / 1.8808158),
    jupiter: 31557600 / (1 / 11.862615),
    saturn: 31557600 / (1 / 29.447498),
    uranus: 31557600 / (1 / 84.016846),
    neptune: 31557600 / (1 / 164.79132),
};

const dogYears = (palnetN, ageD) => Math.round((ageD / obj[palnetN] * 7) * 100) / 100