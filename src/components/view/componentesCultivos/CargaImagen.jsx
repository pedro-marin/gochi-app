import React from 'react';

function CargaImagen(props){
    return(
        <img
        className={"bd-afterLoad-img card-img-top"}
        loading="lazy"
        src={props.imagenes}
        alt={"gochi"}
        
      />
    )

}
export default CargaImagen;