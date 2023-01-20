module.exports = function (sequelize, dataType) {

    let alias = 'CategoryProducto';

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

    let CategoryProducto = sequelize.define(alias, cols, config);

    CategoryProducto.associate = function (models) {
        CategoryProducto.hasMany (models.Producto, {
            as: 'products',
            foreigkey: 'id_category'
        });
    };

    return CategoryProducto;
}