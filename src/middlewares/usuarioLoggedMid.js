// middleware de aplicacion que define una variable local si hay o no session 
function usuario (req, res, next) {
    res.locals.logged = false;

    if (req.session && req.session.userLog) {
        res.locals.logged = true;
        res.locals.userLog = req.session.userLog
    }

    next();
}

module.exports = usuario