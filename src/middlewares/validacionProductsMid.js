const {body} = require('express-validator');
const path= require('path');

module.exports = [
    body('name').notEmpty().isLength({ min: 5 }),
    body('description').notEmpty().isLength({ min: 20}),
    body('img').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png', '.jpeg', '.gif']

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
