module.exports = function (sequelize, dataType) {

    let alias = 'LotProducto';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Lot: {
            type: dataType.STRING,
        }
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let LotProducto = sequelize.define(alias, cols, config);

    
    lotProducto.associate = function (models) {
        lotProducto.hasMany (models.Producto, {
            as: 'products',
            foreigkey: 'id_lot'
        });
    };

    return LotProducto;
}