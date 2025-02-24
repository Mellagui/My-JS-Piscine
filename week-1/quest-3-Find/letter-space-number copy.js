const rgx = /[a-z][\s][0-9]\b/gi;
const letterSpaceNumber = (str) => str.match(rgx)? str.match(rgx): [];