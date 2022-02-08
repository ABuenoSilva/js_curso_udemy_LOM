const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

adicionaTarefasSalvas();

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) criaTarefa(inputTarefa.value);
})

btnTarefa.addEventListener('click', (e) => {
    criaTarefa(inputTarefa.value);
});

function criaTarefa(tarefa) {
    if(!tarefa) return; 
    const li = criaElement('li');
    li.innerHTML = tarefa;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
    limpaInput();
}

function criaElement(tipo) {
    const el = document.createElement(tipo);
    return el;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(element) {
    const button = criaElement('button');
    element.innerHTML += ' ';
    button.innerHTML = 'Apagar';
    button.setAttribute('class','apagar');
    button.setAttribute('title','Apagar esta tarefa');
    element.appendChild(button);
}

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText.replace('Apagar','').trim();
        listaDeTarefas.push(textoTarefa);
        const tarefasJson = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas',tarefasJson);
    }
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    if(listaDeTarefas) {
        listaDeTarefas.forEach( (v) => {
            criaTarefa(v);
        });     
    }
}