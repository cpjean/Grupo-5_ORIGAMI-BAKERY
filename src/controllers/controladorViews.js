const path = require ('path')
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
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

    update: (req, res) => {
        // Do the magic
      },
    
      destroy: (req, res) => {
        // Do the magic
      },
}

module.exports = controladorViews
