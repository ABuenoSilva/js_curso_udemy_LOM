//Generics pre-definidos (alguns)

//Record
const object1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(object1);

type PessoaProtocol = {
  nome: string;
  sobrenome?: string;
  idade?: number;
};

const object2: PessoaProtocol = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(object2);

//Required
type PessoaRequired = Required<PessoaProtocol>;

const object3: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(object3);

//Partial
type PessoaPartial = Partial<PessoaRequired>;

const object4: PessoaPartial = {
  nome: 'Luiz',
  idade: 30,
};
console.log(object4);

//Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

//Extract //Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

// Forma manual (hardcode)
/*
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountAPI = {
  id: string;
  nome: string;
  idade: number;
};

const accountMongo: AccountMongo = {
  _id: 'lçaksdfja32341324ikjadfç',
  nome: 'Ale',
  idade: 48,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);
console.log(accountAPI);
*/

//Forma utilizando generics
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'lçaksdfja32341324ikjadfç',
  nome: 'Ale',
  idade: 48,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);
console.log(accountAPI);

export default 1;
