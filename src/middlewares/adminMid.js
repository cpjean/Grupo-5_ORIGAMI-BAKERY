function admin (req, res, next) {
    res.locals.admin = false;
    let userLog = req.session.userLog
    if (req.session.userLog && userLog.id_category == 1)  {
        res.locals.admin = true;
        res.locals.adminLog = req.session.userLog
    }

    next();
}

module.exports = admin