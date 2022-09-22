import React from "react";

const Archivos = (props) => {
  const listaArchivos = props.infoarchivo;
  const Archivos = listaArchivos.map((archi, index) => (
    <div key={index} class="my-3 mx-auto text-center">
      <p className="fs-5 fw-bold">{archi.nombre}</p>

      <a href={archi.enlace} target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/office/80/000000/export-pdf.png"
          alt="imagen"
        />
      </a>
      <p>{archi.descripcion}</p>
    </div>
  ));
  return <div class="d-flex flex-column my-3 bg-white">{Archivos}</div>;
};

export default Archivos;
