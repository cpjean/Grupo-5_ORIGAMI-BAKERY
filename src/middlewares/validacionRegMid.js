const {body} = require('express-validator');
const path= require('path');


// creo las validaciones para login y registro, que no quede el campo vacio o se envia un mensaje
module.exports = [
    body('email')
       .notEmpty().withMessage('Ingrese su email').bail()
       .isEmail().withMessage('Debe ingresar un email valido'),
    body('name').notEmpty().withMessage('Escriba su nombre'),
    body('password').notEmpty().withMessage('Escriba su contraseña'),
    body('avatar').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png']

        if(!file){
            throw new Error('Suba una imagen');
        } else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)){
                throw new Error(`El archivo debe ser ${acceptedExtension.join(', ')}`)
            }
        }
        return true;
    })
]
