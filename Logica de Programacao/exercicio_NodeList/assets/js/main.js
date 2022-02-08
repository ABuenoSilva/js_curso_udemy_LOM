const paragrafos = document.querySelector('.paragrafos');
const nodeList = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

nodeList.forEach( (p, i) => {
    //p.style = `background-color: ${backgroundColorBody};color: white`;
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
});