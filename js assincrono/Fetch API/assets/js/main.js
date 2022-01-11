document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    
    const href = el.getAttribute('href');

    //fetch "padrao" com .then e .catch
    /*
    fetch(href)
        .then( response => response.text()) //.text() retorna outra promise
        .then( html => carregaResultado(html)) //html é o .then do .text()
        .catch( e => console.error(e));
    */

    
    try{
        const response = await fetch(href);
        const html = await response.text();
        carregaResultado(html); 
    } catch (e) {
       console.error(e);
    }
   
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}