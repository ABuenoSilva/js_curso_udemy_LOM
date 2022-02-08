/*
function* geradora1() {
    //Código...
    yield 'Valor 1';
    //Código...
    yield 'Valor 2';
    //Código...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

const g2 = geradora1();
for (let valor of g2) {
    console.log(valor);
}
*/

/*
function* geradora2() {
    let i = 0;
    while(true) yield(i++);
}
*/

/*
const g3 = geradora2();
for(let i = 0; i < 10; i++) {
    console.log(g3.next());
}
*/

/*
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for(let valor of g4) console.log(valor);
*/

function* geradora5() {
    yield () => console.log('Vim do y1');
    return () => console.log('Vim do return');
    yield () => console.log('Vim do y2'); //Return finaliza a geradora então não vai ser executada
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();

