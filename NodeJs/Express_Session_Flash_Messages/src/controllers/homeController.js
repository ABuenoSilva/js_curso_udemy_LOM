exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'Alexandre', logado: true};
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send('Nova rota de post');
    return;
};