const fs = require ('fs');
const path = require ('path');

let productos = fs.readFileSync(path.resolve('Public/Data/productos.json'),{encoding: 'utf-8'});
productos= JSON.parse(productos);

let controladorViews = {
    
    index: function (req, res){
        res.render (path.join('../views/index.ejs'));
    },
    productos: function (req, res){
        res.render ('./products/productos.ejs',{productos})
    },
    carrito: function (req, res){
        res.render ('./products/carrito.ejs')
    },
    ingreso: function (req, res){
        res.render ('./users/login.ejs')
    },
    registro: function (req, res){
        res.render ('./users/registro.ejs')
    },

      creacion: function (req, res){
        res.render ('./products/creacion.ejs')
    },  
  
    detalle: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = productos.find(producto=> producto.id == idEdit)
        res.render (path.join('../views/products/detalle.ejs'),{producto:producto})
    }, 
    edicion: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = productos.find(producto=> producto.id == idEdit)
        res.render (path.join('../views/products/edicion.ejs'),{producto:producto})
    },    
    destroy: function (req, res){
            let idEdit = Number(req.params.id);
            productos = productos.filter(producto => producto.id !== idEdit);
            res.send("Eliminado"),{producto:producto};
    }
};

module.exports = controladorViews
