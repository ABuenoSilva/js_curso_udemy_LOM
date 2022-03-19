const { html2 } = require('./base');

// $1 $2 $3... -> retrovisores \1 -> primeiro grupo

//console.log(html2);
//console.log(html2.match(/<(\w+).*?>.+?<\/\1+>/g));
//console.log(html2.match(/<(\w+)[\s\S]*?)>([\s\S]*?)<\/\1+>/g));
console.log(html2.replace(/<((\w+)[\s\S]*?)>([\s\S]*?)<\/\1+>/g, '$1 $2'));