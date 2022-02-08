const nomes = ['Maria', 'João', 'Eduardo', 'Mônica', 'Júlia'];

///splice(indice, qelemen, elemen1, elemen2, elemen3...)
console.log(nomes);
let nome = nomes.splice(4,1);
console.log(nomes);
console.log(nome);
nome = nomes.splice(-2,Number.MAX_VALUE);
console.log(nomes);
console.log(nome);
nomes.splice(nomes.length,0,'Alexandre','Zanza');
console.log(nomes);
nome = nomes.splice(1,1,'Felipe');
console.log(nomes);
console.log(nome);
