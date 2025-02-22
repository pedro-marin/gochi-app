import React from "react";

const Publicidad = (props) => {
  const listaPublicidad = props.lista;
  const Banner = listaPublicidad.map((publicidad, index) => (
    <div key={index} className="my-3 mx-auto text-center">
      <a href={publicidad.href} target="_blank" rel="noreferrer">
        <p>
          <strong>{publicidad.descripcion}</strong>
        </p>
        <img
          className="img-fluid"
          src={publicidad.imagen}
          alt={publicidad.alt}
        />
      </a>
    </div>
  ));
  return <div className="d-flex flex-column my-3 bg-white">{Banner}</div>;
};

export default Publicidad;
