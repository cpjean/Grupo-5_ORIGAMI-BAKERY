const fs = require ('fs');
const path = require ('path');



let controladorCarrito = {
    // renderizo el "carrito" (EDITAR LA PAGINA PARA QUE SEA FUNCIONAL)
    carrito: function (req, res){
        res.render ('./products/carrito.ejs')
    }
};

module.exports = controladorCarrito
