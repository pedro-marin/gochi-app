import React from "react";
import CardMBFM from "./CardMBFM";

const MetodosReproduccion = (props) => {
  
  const listaMreproduccion = props.info_m_reproduccion;
  const mreproducion = listaMreproduccion.map((publicidad, index) => (
    <CardMBFM  name={publicidad.name}
    imagen={publicidad.imagen}
    descripcion={publicidad.descripcion}> </CardMBFM>
  ));
  return (
    <div className="py-3 bg-white">
      <h2 className="mb-1 pb-3 text-center">Metodo reproducion</h2>{" "}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3" style={{ borderStyle: "none" }}>
        {mreproducion}
      </div>
    </div>
  );
};

export default MetodosReproduccion;
