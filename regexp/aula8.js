const { lookahead } = require('./base');

console.log(lookahead);
//console.log(lookahead.match(/.+[^in]active$/gm));

// positive lookahead (frases que tem active)
//console.log(lookahead.match(/.+(?=[^in]active)/gim));

//negative lookahead (frases que tem inactive)
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//positive lookbehind
//console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

//negative lookbehind
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));