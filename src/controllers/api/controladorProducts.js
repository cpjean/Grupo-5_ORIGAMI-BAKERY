const DB = require("../../database/models")
const OP = DB.Sequelize.Op;

module.exports = {
    list: (req,res)=> {
        DB.Product.findAll({
        })
        .then((productos) => {
            const count = productos.length;
            const mappedProducts = productos.map((product) => ({
                id_product: product.id,
                name: product.name,
                description: product.description,
                id_category: product.id_category,
                price:product.price,
                image:product.img,
                detail: `localhost:3000/api/products/${product.id}`
            }));
            return res.status(200).json({
                count,
                products:mappedProducts,
                status:200,
            });
        });
    },
    detail: (req,res) => {
        DB.Product.findByPk(req.params.id)
            .then((producto) => {
              if (!producto) {
                return res.status(404).json({
                  message: "Producto no encontrado",
                  status: 404,
                });
              }
              const image = `/imagenes/products/${producto.img}`;
              return res.status(200).json({
                ...producto.dataValues,
                image,
                status: 200,
              });
            });
        }
}