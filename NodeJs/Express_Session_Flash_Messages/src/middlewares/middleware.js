module.exports = (req, res, next) => {
    if(req.body.cliente) {
        console.log('Middleware global no post ' + req.body.cliente);
    } else {
        console.log('Estou no middleware global');
    }
    next();
};