const path = require('path');
const multer = require('multer'); 

// uso multer para guardar una imagen de un usuario con las sig. especificaciones
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, './public/imagenes/users')
    },
    filename: (req, file, cb) =>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
}) 

const uploadFile = multer({storage});

module.exports = uploadFile;