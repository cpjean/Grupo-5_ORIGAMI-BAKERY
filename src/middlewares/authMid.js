// funcion que se fija si alguien no esta logueado
function authMid (req, res, next) {
    if (!req.session.userLog) {
        return res.redirect ('/user/login')
    }
    next();
}

module.exports = authMid
module.exports = authMid