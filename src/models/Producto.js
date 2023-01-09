const fs = require ('fs');
const path = require ('path');
const multer = require('multer');

// creo metodos para usar en los controles de productos
const Producto = {
    // llamo y paso a un array de objetos a la data de productos
    getData: function (){
        return JSON.parse(fs.readFileSync(path.resolve('src/data/productos.json'), 'utf-8'));
    },
    // genero el id en base al ultimo id de productos, si no hay genero el 1
    generateId: function (){
        let allProducts = this.findAll();
        let last = allProducts.pop();
        if (last){
            return last.id + 1;            
        }
        return 1;
    },
    // retorno todos los productos
    findAll: function (){
        return this.getData();
    },
    // retorno todos los productos de algun tipo
    filterByField: function (field, contenido){
        let allProducts = this.findAll();
        let product = allProducts.filter(producto => producto[field] === contenido);
        return product;
    },
    // busco un producto especifico
    findByField: function (field, contenido){
        let allProducts = this.findAll();
        let product = allProducts.find(producto => producto[field] === contenido);
        return product;
    },
    // creo un producto nuevo
    create: function (productData) {
        let allProducts = this.findAll();
        let newProduct = {
            lot: productData.lot,
            id: this.generateId(),
            tipe: productData.tipe,
            name: productData.name,
            description: productData.description,
            img: productData.img,
            price: productData.price
        }
        allProducts.push(newProduct);
        fs.writeFileSync(path.resolve('src/data/productos.json'), JSON.stringify(allProducts, null, ' '));
        return newProduct;
    },
    // modifico un producto
    update: function (productData) {
        let allProducts = this.findAll();
        let producto = allProducts.find(producto=> producto.id == productData.id)

        producto.lot = productData.lot,
        producto.id = productData.id,
        producto.tipe = productData.tipe,
        producto.name = productData.name,
        producto.description = productData.description,
        producto.img = productData.img,
        producto.price = productData.price

        fs.writeFileSync(path.resolve('src/data/productos.json'), JSON.stringify(allProducts, null, ' '));
        return producto;
    },
    // borro un producto
    delete: function (id) {
        let allProducts = this.findAll();
        let newProducts = allProducts.filter(producto => producto.id !== id)
        fs.writeFileSync(path.resolve('src/data/productos.json'), JSON.stringify(newProducts, null, ' '));
        return true
    }
}

module.exports= Producto