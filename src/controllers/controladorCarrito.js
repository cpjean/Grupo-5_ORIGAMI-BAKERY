const fs = require ('fs');
const path = require ('path');

let productos = fs.readFileSync(path.resolve('src/data/productos.json'),{encoding: 'utf-8'});
productos= JSON.parse(productos);

let controladorCarrito = {
    // renderizo el "carrito" (EDITAR LA PAGINA PARA QUE SEA FUNCIONAL)
    carrito: function (req, res){
        res.render ('./products/carrito.ejs')
    }
};

module.exports = controladorCarrito
