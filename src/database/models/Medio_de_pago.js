module.exports = function (sequelize, dataType) {

    let alias = 'MedioDePago';

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
        tableName: '',
        timestamps: false
    };

    let MedioDePago = sequelize.define(alias, cols, config);

    MedioDePago.associate = function (models) {
        MedioDePago.hasMany (models.Compra, {
            as: 'Compras',
            foreigkey: 'id_medio_de_pago'
        });
    };

    return MedioDePago;
}