const fs = require ('fs');
const path = require ('path');

let productos = fs.readFileSync(path.resolve('src/data/productos.json'),{encoding: 'utf-8'});
productos= JSON.parse(productos);

let controladorCarrito = {
    
    carrito: function (req, res){
        res.render ('./products/carrito.ejs')
    }
};

module.exports = controladorCarrito
