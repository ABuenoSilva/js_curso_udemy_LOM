module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Esta é uma variável local';
    next();
};