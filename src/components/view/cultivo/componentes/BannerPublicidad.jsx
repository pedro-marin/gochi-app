import React from "react";
import Publicidad from "../../curso/cursoComponentes/Publicidad"

const BannerPublicidad = (props) => {
  return (
    <div className="p-4 mb-3 bg-white rounded">
      <h4 className="fst-italic text-center">Estos artículos son de utilidad</h4>
      <Publicidad lista={props.info_publicidad}> </Publicidad>
    </div>
  );
};

export default BannerPublicidad;
