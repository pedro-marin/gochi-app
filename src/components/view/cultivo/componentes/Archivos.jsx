import React from "react";

const Archivos = (props) => {
  const listaArchivos = props.infoarchivo;
  const Archivos = listaArchivos.map((publicidad, index) => (
    <div key={index} class="my-3 mx-auto text-center">
      <p className="fs-5 fw-bold">{publicidad.nombre}</p>
      
        <a href={publicidad.enlace}><img src="https://img.icons8.com/office/80/000000/export-pdf.png"alt="imagen"/>
        </a><p>{publicidad.descripcion}</p>
    </div>
  ));
  return <div class="d-flex flex-column my-3 bg-white">{Archivos}</div>;
};

 

export default Archivos;
