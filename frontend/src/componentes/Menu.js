import React, { useState, useEffect } from "react";
import axios from "axios";
import Grafico from "./Grafico";

function Menu() {
  const [categorias, setCategorias] = useState([]);
  const [productosF, setProductosF] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [ventas, setVentas] = useState([]);

  const [selectedProducto, setSelectedProducto] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (categorias.length > 0) {
      axios
        .get("http://localhost:8080/api/productos/category/" + categorias[0].id)
        .then((response) => {
          setProductosF(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categorias]);

  useEffect(() => {
    if (productosF.length > 0) {
      var prod = productosF[0];
      var mrc = prod.productomarcas[0].marcaId;

      axios
        .get("http://localhost:8080/api/productos/marcasproducto/" + prod.id)
        .then((response) => {
          setMarcas(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("http://localhost:8080/api/marcas/ventasmp/" + prod.id + "/" + mrc)
        .then((response) => {
          setVentas(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [productosF]);

  const ChangeCategoria = (e) => {
    const opcion = parseInt(e.target.value);

    axios
      .get("http://localhost:8080/api/productos/category/" + opcion)
      .then((response) => {
        setProductosF(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ChangeProduct = (e) => {
    const opcion = parseInt(e.target.value);
    setSelectedProducto(opcion);

    axios
      .get("http://localhost:8080/api/productos/marcasproducto/" + opcion)
      .then((response) => {
        setMarcas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    var prod = productosF.filter((item) => item.id === opcion);

    if (prod[0].productomarcas.length > 0) {
      var mrc = prod[0].productomarcas[0].marcaId;

      axios
        .get("http://localhost:8080/api/marcas/ventasmp/" + opcion + "/" + mrc)
        .then((response) => {
          setVentas(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("No");
    }
  };

  const ChangeMarca = (e) => {
    const opcion = parseInt(e.target.value);

    axios
      .get(
        "http://localhost:8080/api/marcas/ventasmp/" +
          selectedProducto +
          "/" +
          opcion
      )
      .then((response) => {
        setVentas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-xs-6 col-md-4 text-center">
          <label>Categoria</label>
          <select name="categorias" id="categorias" onChange={ChangeCategoria}>
            {categorias.map((item, i) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-xs-6 col-md-4 text-center">
          <label>Producto</label>
          <select name="productos" id="productos" onChange={ChangeProduct}>
            {productosF.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-xs-6 col-md-4 text-center">
          <label>Marca</label>
          <select name="marcas" id="marcas" onChange={ChangeMarca}>
            {marcas.map((item, i) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Grafico ventas={ventas} />
    </>
  );
}

export default Menu;
