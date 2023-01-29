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
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false,
        underscore: true
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo (models.CategoryUser, {
            as: 'CategoryUser',
            foreignKey: 'id_category'
        });
    };

    return User;
}