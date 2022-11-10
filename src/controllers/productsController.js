const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../Data/productos.json'), {encoding: 'utf-8'});
products = JSON.parse(products);

let productsController = {
detalle: function(req,res){
    let id = req.params.id
    products.filter(function(product){
        return product.id == id
    })
}
}

module.exports = productsController;