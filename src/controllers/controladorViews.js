const path = require ('path')

let controladorViews = {
    index: function (req, res){
        res.render('index');
    },
    productos: function (req, res){
        res.render ('./products/productos')
    },
    carrito: function (req, res){
        res.render ('./products/carrito')
    },
    ingreso: function (req, res){
        res.render ('./users/login')
    },
    registro: function (req, res){
        res.render ('./users/registro')
    },
    detalle: function (req, res){
        res.render ('./products/detalle')
    }
}

module.exports = controladorViews
