const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

/* requerimos rutaIndex */
const rutaUsers = require ('../controllers/controladorUsers')

router.get('/login', rutaUsers.ingreso)
router.post('/login', [
    check('email').isEmail(),
    check('password').isLength({min:6}).withMessage('La contraseña debe tener un minimo de 6 caracteres')
],
controladorUsers.processLogin
)

router.get('/registro', rutaUsers.registro)
router.put()

module.exports = router;