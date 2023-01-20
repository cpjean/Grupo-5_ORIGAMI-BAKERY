module.exports = function (sequelize, dataType) {

    let alias = 'CategoryUsuario';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataType.STRING,
        }
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let CategoryUsuario = sequelize.define(alias, cols, config);

    CategoryUsuario.associate = function (models) {
        CategoryUsuario.hasMany (models.Usuario, {
            as: 'users',
            foreigkey: 'id_category'
        });
    };

    return CategoryUsuario;
}