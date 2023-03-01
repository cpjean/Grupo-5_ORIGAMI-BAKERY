const DB = require("../../database/models")
const OP = DB.Sequelize.Op;

module.exports = {
    list: (req,res)=> {
        DB.User.findAll({})
        .then((users) => {
            const count = users.length;
            const mappedUsers = users.map((user) => ({
                id_user: user.id_user,
                name: user.name,
                surname:user.surname,
                email: user.email,
                dni:user.dni,
                telephone: user.telephone,
                detail: 'localhost:3000/api/users/${user.id}'
            }));
            return res.status(200).json({
                count,
                users:mappedUsers,
                status:200,
            });
        });
    },
    detail: (req,res) => {
        DB.User.findByPk(req.params.id, {
          attributes: {
            exclude: ["password", "password2","id_user_category"],
          },
        })
          .then((usuario) => {
            if (!usuario) {
              return res.status(404).json({
                message: "Usuario no encontrado",
                status: 404,
              });
            }
            const image = `/imagenes/users/${usuario.avatar}`;
            return res.status(200).json({
              ...usuario.dataValues,
              image,
              status: 200,
            });
          });
      }
}