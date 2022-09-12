import React from "react";
import CardMBFM from "./CardMBFM";

const Plagas = (props) => {
  const listaPlagas = props.info_plagas;
  const Plagas = listaPlagas.map((publicidad, index) => (
    <CardMBFM  name={publicidad.name}
    imagen={publicidad.imagen}
    descripcion={publicidad.descripcion}> </CardMBFM>
  ));
  return (
    <div className="py-3 bg-white">
      <h2 className="mb-1 pb-3 text-center">Plagas comunes</h2>{" "}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3" style={{ borderStyle: "none" }}>
        {Plagas}
      </div>
    </div>
  );
};
export default Plagas;
