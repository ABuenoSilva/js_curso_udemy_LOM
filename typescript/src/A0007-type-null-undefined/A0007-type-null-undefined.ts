//Undefined
let x;
console.log(typeof x);
if (typeof x === 'undefined') x = 20;
console.log(typeof x);
console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

//Null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

console.log(squareOf(2));
console.log(squareOf('2'));
