module.exports = function (sequelize, dataType) {

    let alias = 'CategoryUser';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataType.STRING,
        }
    };

    let config = {
        tableName: 'category_user',
        timestamps: false,
        underscore: true
    };

    let CategoryUser = sequelize.define(alias, cols, config);

    CategoryUser.associate = function (models) {
        CategoryUser.hasMany (models.User, {
            as: 'users',
            foreignKey: 'id_category'
        });
    };

    return CategoryUser;
}