const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Exemplo de middleware
/*
function meuMiddleware(req, res, next) {
    req.session = { nome: 'Alexandre', sobrenome: 'Bueno'}
    console.log();
    console.log('Passei no middleware');
    console.log();
    next()
}
*/
//route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => {console.log(`Final req.session: ${req.session.nome}`);});

//Rotas da home
route.get('/',homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;