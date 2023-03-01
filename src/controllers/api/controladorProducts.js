const db = require('../../database/models');
const Product = require('../../database/models/Product');
const productosController = require('../controladorProductos');



let apiProductosController = {

    list: function(req, res){
        db.Product.findAll({
        })
        .then((productos) => {
            const count = productos.length;
            const mappedProducts = productos.map((product) => ({
                id_product: product.id,
                name: product.name,
                description: product.description,
                id_category: product.id_type,
                price:product.price,
                image:product.img,
                detail: `localhost:3030/api/products/${product.id}`
            }));
            return res.status(200).json({
                count,
                products:mappedProducts,
                status:200,
            });
        });
    },

    ultimoProducto: function(req, res){
      db.Product.findOne({
          order: [["id", "DESC"]]
      })
      .then(function(ultProduct){
          console.log(ultProduct)

          let respuesta = {
              meta: {
                  status: 200,
                  name: ultProduct.name
              },
              data: {
                  id: ultProduct.id,
                  name: ultProduct.name,
                  price: ultProduct.price,
                  description: ultProduct.description,
                  image: 'http://localhost:3030/imagenes/products/' + ultProduct.img,
                  detail: `http://localhost:3030/productos/${ultProduct.id}/detalle`
              }
          }

          res.json(respuesta)
      })
      .catch(function(error){
          console.log(error)
      })
  },  

    detail: function(req, res){
        db.Product.findByPk(req.params.id)
        .then((producto) => {
          if (!producto) {
            return res.status(404).json({
              message: "Producto no encontrado",
              status: 404,
            });
          }
          const image = `http://localhost:3030/imagenes/products/${producto.img}`;
          return res.status(200).json({
            ...producto.dataValues,
            image,
            status: 200,
          });
        });
    }

}

module.exports = apiProductosController;
