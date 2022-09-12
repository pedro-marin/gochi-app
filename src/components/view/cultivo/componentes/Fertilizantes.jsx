import React from "react";
import CardMBFM from "./CardMBFM";

const Fertilizantes = (props) => {
  
  const listaFertilizantes = props.info_fertelizantes;
  const Fertelizantes = listaFertilizantes.map((publicidad, index) => (
    <CardMBFM  name={publicidad.name}
    imagen={publicidad.imagen}
    descripcion={publicidad.descripcion}> </CardMBFM>
  ));
  return (
    <div className="py-3 bg-white">
      <h2 className="mb-1 pb-3 text-center">Fertelizantes</h2>{" "}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3" style={{ borderStyle: "none" }}>
        {Fertelizantes[0]}
          {Fertelizantes[1]}
          {Fertelizantes[2]}
          {Fertelizantes[3]}
      </div>
    </div>
  );
};
export default Fertilizantes;
