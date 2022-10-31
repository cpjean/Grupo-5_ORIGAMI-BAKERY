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
    },
    creacion: function (req, res){
        res.render ('./products/creacion')
    },
    detalle: function (req, res){
        res.render ('./products/detalle')
    },
    edicion: function (req, res){
        res.render ('./products/edicion')
    },
}

module.exports = controladorViews
