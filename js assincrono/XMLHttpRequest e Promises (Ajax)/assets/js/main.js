//metodo antigo
/*
const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        };
    });
};
*/
//promise
const request = obj => {
    return new Promise(( resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            };
        });
    
    });
};

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

//Metodo antigo (callback)
/*
function carregaPagina(el) {
    const href = el.getAttribute('href');
    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(error) {
            console.log(error)
        }
    });
}
*/
//Promise
async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href
    }
    //Com .then e .catch
    /*
    request(objConfig)
    .then( response => carregaResultado(response))
    .catch( error => console.log(error));
    */
   //Com await
   try{
    const response = await request(objConfig);
    carregaResultado(response); 
   } catch (e) {
       console.log(e);
   }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}