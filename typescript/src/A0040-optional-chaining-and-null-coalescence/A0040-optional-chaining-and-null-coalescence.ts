type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
};

//Encadeamento opcional (?.) e coalescência nula (??)
console.log(documento.data?.toDateString() ?? 'Ops, não existe data');
