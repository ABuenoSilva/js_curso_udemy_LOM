require('dotenv').config();
const express = require('express');
const app=express();
const mongoose = require('mongoose');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const sessionOptions = session({
    secret: '123456qqqbbb',
    store: MongoStore.create({ mongoUrl: process.env.connectionString}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

const helmet = require('helmet');
const csrf = require('csurf');

mongoose.connect(process.env.connectionString)
    .then(() => app.emit('pronto'))
    .catch( (e) => console.log(e));

app.use(sessionOptions);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(helmet());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//CSRF antes dos middlewares e rotas
app.use(csrf());

app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor on. Acessar http://localhost:3000');
    })});