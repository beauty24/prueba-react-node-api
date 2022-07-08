const db = require("../models");
const Producto = db.productos;
const Venta = db.ventas;
const Marca = db.marcas;
const ProductoMarca = db.productomarca;

// Find a single Producto with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Producto.findByPk(id, { include: ["productomarcas"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Producto with id=" + id
      });
    });
};

// Get all Productos include ventas
exports.findAll = (req, res) => {
Producto.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving productos."
    });
  });
};

// Find a single Producto with  category an id
exports.findByCategory = (req, res) => {
  const id = req.params.id;

  Producto.findAll({ 
  include: [{
		  model: ProductoMarca,
		  as: 'productomarcas',	
		  }],
  where: {
	  categoriaId:id
  }  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Producto with category=" + id
      });
    });
};

// Find a single Producto with  category an id
exports.findByMarc = (req, res) => {
  const id = req.params.id;

  Producto.findAll({ where: {
	  marcaId:id
  } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Producto with marca=" + id
      });
    });
};

// Find a single Producto with an id
exports.findMarcasOneProduct = (req, res) => {
  const id = req.params.id;
  
  Marca.findAll({
	  include: [{
		  model: ProductoMarca,
		  as: 'productomarcas',	
		  where: {productoId: id}
		  }],
	  order: [
            ['id', 'ASC'],
        ],	  
	 })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Producto with marca=" + id
      });
    });
 
};
