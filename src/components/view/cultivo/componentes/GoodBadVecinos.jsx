import React from "react";
import CardMBFM from "./CardMBFM";

const GoodBadVecinos = (props) => {
  const listaBuenos = props.info_buenos_vecinos;
  const Buenos = listaBuenos.map((items, index) => (
    <CardMBFM key={index}
      name={items.name}
      imagen={items.imagen}
      descripcion={items.descripcion}
    >
      {" "}
    </CardMBFM>
  ));
  const listaMalos = props.info_malo_vecinos;
  const Malos = listaMalos.map((items, index) => (
    <CardMBFM
    key={index}
      name={items.name}
      imagen={items.imagen}
      descripcion={items.descripcion}
    >
      {" "}
    </CardMBFM>
  ));
  return (
    <div className="py-3 bg-white" >
      <h2 className="mb-1 pb-3 text-center">Buenos vecinos</h2>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3"
        style={{ borderStyle: "none" }}
      >
        {Buenos}
      </div>
      <h2 className="mb-1 pb-3 text-center">Malos vecinos</h2>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3"
        style={{ borderStyle: "none" }}
      >
        {Malos}
      </div>
    </div>
  );
};

export default GoodBadVecinos;
