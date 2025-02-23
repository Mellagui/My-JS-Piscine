const DNA = (str) => str.length === 0? str: str === 'AUCG'? 'TAGC': str;

const RNA = (str) => str.length === 0? str: str === 'TAGC'? 'AUCG': str;

console.log(RNA(''), '')
console.log(RNA('TAGC')== 'AUCG')
console.log(RNA(DNA('AUCG'))== 'AUCG')
console.log(RNA(DNA('CAUG'))== 'CAUG')

console.log(DNA('') == '')
console.log(DNA('AUCG') == 'TAGC')
console.log(DNA(RNA('TAGC')) == 'TAGC')
console.log(DNA(RNA('GCAT')) == 'GCAT')