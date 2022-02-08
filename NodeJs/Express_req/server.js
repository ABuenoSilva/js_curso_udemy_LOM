const express = require('express');
const app=express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`<form action="/testes" method="POST">
                Nome do cliente: <input type="text" name="nome"></input>
                <button>Enviar</button>
              </form>`);
});

app.post('/testes', (req, res) => {
    res.send(req.body);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    //res.send(req.params);
    res.send(req.query);
});

app.listen(3000, () => {
    console.log('Servidor on. Acessar http://localhost:3000');
});