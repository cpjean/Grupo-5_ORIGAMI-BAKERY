const DB = require("../../database/models")
const OP = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Users
        .findAll()
        .them(users => {
            return res.status(200).json({
                total: users.length,
                data: users,
                status: 200
            })
        })
    },
    detail: (req, res) => {
        DB.Users
        .findByPk(req.params.id)
        .them(users => {
            return res.status(200).json({
                data: users,
                statu: 200
            })
        })
    }
}