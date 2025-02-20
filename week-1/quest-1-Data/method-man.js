const words = (str) => str.split(" ");
const sentence = (arr) => arr.join(" ");
const yell = (str) => str.toUpperCase();
const whisper = (str) => str.toLowerCase();
const capitalize = (str) => yell(str[0]) + whisper(str.slice(1))

const str = 'lello world erAAAAAre eAAAAarer eer Are ere';

console.log(capitalize(str))