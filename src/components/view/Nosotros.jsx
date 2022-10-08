import React from "react";
import { useEffect } from "react";
import "../../stylesheets/Nosotros.css";
import Nosotro from "./nosotros/Nosotro";

const Nosotros = () => {
  useEffect(() => {
    document.title = "mihuertafacil - Nosotros";
  }, []);

  return (
    <div className="container contenedor-todo pt-1">
      <Nosotro
        titulo1="Quienes somos"
        titulo2="Mision"
        descripcion2="Nuestra misión es brindar información para la implementación huertas extensas o pequeñas, fomentando la economía y el bien estar familiar con el consumo de productos propios, mejorando la calidad de vida en las familias y en la comunidad, a través de la conexión con las raíces y la tierra"
        titulo3="Vision"
        descripcion3="Nuestra visión es ser referente en la creación e implementación de huertos.
        Poder abarcar a colegios, instituciones u organizaciones, y ampliando la variedad categorías y cultivos, entregando calidad de información"
      />
    </div>
  );
};

export default Nosotros;
