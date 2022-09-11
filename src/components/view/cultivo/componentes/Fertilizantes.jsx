import React from "react";

const Fertilizantes = (props) => {
  const estilo = {
    with: "100px",
    height: "100px",
  };
  const listaPublicidad = props.info_fertilizantes;
  const Banner = listaPublicidad.map((publicidad, index) => (
    <div
      className="col"
      style={{
        borderBottomStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      <div
        class="card text-center"
        style={{ borderStyle: "none" }}
      >
        {" "}
        <ul className="icon-list ps-0 mb-0">
          <img alt="imagen" src={publicidad.imagen} style={estilo} />

          <h2 className="">{publicidad.name}</h2>
          <p className="">{publicidad.descripcion}</p>
          <p>
            <a className="btn btn-secondary" href="/">
              View details »
            </a>
          </p>
        </ul>
      </div>
    </div>
  ));
  return (
    <div className="py-3 bg-white">
      <h2 className="mb-1 pb-3 text-center">Fertelizantes</h2>{" "}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3" style={{ borderStyle: "none" }}>
        {Banner[0]}
          {Banner[1]}
          {Banner[1]}
      </div>
    </div>
  );
};
export default Fertilizantes;
