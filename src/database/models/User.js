module.exports = function (sequelize, dataType) {

    let alias = 'User';

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
            type: dataType.DATE
        },
        updatedAt: {
            type: dataType.DATE
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {


        Usuario.hasMany (models.CategoryUser, {
            as: 'category',
            foreigkey: 'id_category'
        });
    };

    return Usuario;
}