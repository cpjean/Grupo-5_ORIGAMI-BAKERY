module.exports = function (sequelize, dataType) {

    let alias = 'Usuario';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        avatar: {
            type: dataType.STRING,
        },
        name: {
            type: dataType.STRING,
        },
        email: {
            type: dataType.STRING,
        },
        password: {
            type: dataType.STRING,
        },
        createdAt: {
            type: dataType.INTEGER
        },
        updatedAt: {
            type: dataType.INTEGER
        }
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.belongsTo (models.Compra, {
            as: 'compras',
            foreigkey: 'id_cliente'
        });

        Usuario.belongsTo (models.Categoria_usuario, {
            as: 'category',
            foreigkey: 'id_category'
        });
    };

    return Usuario;
}