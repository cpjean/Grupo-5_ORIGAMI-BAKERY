module.exports = function (sequelize, dataType) {

    let alias = 'Type';

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
        tableName: 'type_product',
        timestamps: false
    };

    let Type = sequelize.define(alias, cols, config);

    Type.associate = function (models) {
        Type.hasMany(models.Product, {
            as: 'Product',
            foreignkey: 'id_type'
        });

    };

    return Type;
}