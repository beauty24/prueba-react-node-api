module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define("venta", {
    mes: {
      type: DataTypes.STRING
    },
    valor: {
      type: DataTypes.INTEGER
    }
  });

  return Venta;
};
