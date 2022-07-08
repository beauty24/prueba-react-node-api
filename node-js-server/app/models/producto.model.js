module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define("producto", {
    nombre: {
      type: DataTypes.STRING
    }
  });

  return Producto;
};
