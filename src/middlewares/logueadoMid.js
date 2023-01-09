// funcion que se fija si alguien esta logueado
function logMid (req, res, next) {
    if (req.session.userLog) {
        return res.redirect ('/')
    }
    next();
}

module.exports = logMid