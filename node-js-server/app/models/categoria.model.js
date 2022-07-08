module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define("categoria", {
    nombre: {
      type: DataTypes.STRING
    }
  });

  return Categoria;
};
