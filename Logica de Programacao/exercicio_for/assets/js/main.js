const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
console.log(container);
//const div = document.createElement('div');
//console.log(div);
for (let i = 0; i <= elementos.length; i++) {
    /*
    let p = document.createElement(elementos[i]["tag"]);
    p.innerHTML = elementos[i].texto;
    */
    let { tag, texto } = elementos[i];
    let p = document.createElement(tag);
    p.innerHTML = texto;
    container.appendChild(p);
}
//container.appendChild(div);