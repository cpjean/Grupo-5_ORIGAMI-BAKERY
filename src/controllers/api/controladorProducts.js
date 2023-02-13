const DB = require("../../database/models")
const OP = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Products
        .findAll()
        .them(products => {
            return res.status(200).json({
                totalProducts: products.length,
                
                data: products,
                status: 200
            })
        })
    },
    detail: (req, res) => {
        DB.Products
        .findByPk(req.params.id)
        .them(products => {
            return res.status(200).json({
                data: products,
                statu: 200
            })
        })
    }
}