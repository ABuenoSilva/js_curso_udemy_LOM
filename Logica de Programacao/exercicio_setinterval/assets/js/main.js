let data;
let timer; 
let tagTimer = document.querySelector(".timer");
zeraTimer();

function atualizaTimer(inc) {
    if (inc) data.setSeconds(data.getSeconds()+1);
    tagTimer.innerHTML = data.toLocaleTimeString('pt-BR', {hour12: false});
}

function iniciaTimer() {
    tagTimer.classList.remove('pausado');
    timer = setInterval( () => atualizaTimer(true), 1000);
}

function pausaTimer() {
    tagTimer.classList.add('pausado');
    timer = clearInterval(timer);
}

function zeraTimer() {
    pausaTimer();
    tagTimer.classList.remove('pausado');
    data = new Date('2021-01-01T00:00:00');
    atualizaTimer(false);
}