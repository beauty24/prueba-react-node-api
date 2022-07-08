const db = require("../models");
const Marca = db.marcas;
const Venta = db.ventas;
const Producto = db.productos;
const ProductoMarca = db.productomarca;
const Op = db.Sequelize.Op;


// Retrieve all Marca from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${title}%` } } : null;

  Marca.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving marcas."
      });
    });
};

// Find a single Marca with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Marca.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Marca with id=" + id
      });
    });
};

//devolver ventas por marcaid y productoid
exports.findVentasMP = (req, res) => {
  const pid = req.params.pid;
  const mid = req.params.mid;
  var vts =[];

  ProductoMarca.findAll({
	  include: [{
		  model: Venta,
		  as: 'ventas',	
		  
		  }],
	  where: {productoId: pid, marcaId:mid}	  
	 })
    .then(data => {
		if(data.length > 0){
			vts = data[0].ventas
		}
      res.send(vts);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Producto with marca=" + mid
      });
    });
};

