import React from "react";
import { useEffect, useState } from "react";
import ItemsCategoriaCultivo from "./ItemsCategoriaCultivo";

const ComponenteCategoriasCultivo = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    document.title = "mihuertafacil - Cultivos";
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {


    const data = await fetch('http://1ec6706f-039a-4041-98ba-8caa0ad572db.clouding.host:3000/categorias/')
    const users = await data.json()
    setCategorias(users["docs"])
}


  const categoriacultivo = categorias.map((categoria, index) => (
    <ItemsCategoriaCultivo
      key={index}
      nombre={categoria.cat_cul_name_go}
      descripcion={categoria.cat_cul_description_go}
      total={categoria.cat_cul_totalcultivos_go}
      imagen={categoria.cat_cul_imagen_go}
      href={categoria.cat_cul_href_go}
    />
  ));

  return <div className="col-sm-8 mx-auto">{categoriacultivo}</div>;
};

export default ComponenteCategoriasCultivo;
