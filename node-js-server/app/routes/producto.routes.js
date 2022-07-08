module.exports = app => {
  const productos = require("../controllers/producto.controller.js");

  var router = require("express").Router();

  // Retrieve all Products
  router.get("/", productos.findAll);

  // Retrieve a single Products with id
  router.get("/:id", productos.findOne);
  
  // Retrieve a single Products with category
  router.get("/category/:id", productos.findByCategory);
  
    // Retrieve a single Products with marca
  router.get("/marca/:id", productos.findByMarc);
  
      // Retrieve a single Products with marca
  router.get("/marcasproducto/:id", productos.findMarcasOneProduct);

  app.use("/api/productos", router);
};
