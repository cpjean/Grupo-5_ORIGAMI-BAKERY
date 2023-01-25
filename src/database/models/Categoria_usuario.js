module.exports = function (sequelize, dataType) {

    let alias = 'CategoryUser';

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
        tableName: 'category_user',
        timestamps: false
    };

    let CategoryUsuario = sequelize.define(alias, cols, config);

    CategoryUsuario.associate = function (models) {
        CategoryUsuario.belongsTo (models.User, {
            as: 'users',
            foreigkey: 'id_category'
        });
    };

    return CategoryUsuario;
}