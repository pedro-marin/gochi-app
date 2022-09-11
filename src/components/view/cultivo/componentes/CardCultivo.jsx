import React from "react";
import "../stylecomponente/cardcultivo.css";

function CardCultivo(props) {
  const estilo={
    width: '30%',
    height: '10%',
  }
  return (
    <div class="col" bis_skin_checked="1">
      <div className="card text-center" style={{ borderStyle: "none" }}>
        <p className="fs-5 fw-bold ">{props.nombre_titulo}</p>
        <ul class="icon-list ps-0 mb-0">
          {props.iconeimagen === "icon" ? (
            <>
              <lord-icon
                src={props.icondecultivo}
                trigger="hover"
                style={{ width: "50%", height: "10%" }}
              ></lord-icon>
            </>
          ) : null}
          {props.iconeimagen === "imagen" ? (
            <>
              <img
                src={props.icondecultivo}
                alt="imagen"
                style={{ estilo}}
              />
            </>
          ) : null}
          {props.estacion === "Otoño" ? (
            <>
              <img
                src={props.iconotoño}
                alt="imagen"
                style={{ estilo }}
              />
            </>
          ) : null}
          {props.estacion === "Verano" ||
          props.estacion === "Todas las estaciones" ? (
            <>
              <img
                src={props.iconverano}
                alt="imagen"
                style={{ estilo}}
              />
            </>
          ) : null}
          {props.estacion === "Primavera" ? (
            <>
              <img
                src={props.iconprimavera}
                alt="imagen"
                style={{estilo}}
              />
            </>
          ) : null}
          {props.estacion === "Invierno" ? (
            <>
               <img
                src={props.iconinvierno}
                alt="imagen"
                style={{estilo}}
              />
            </>
          ) : null}

          <p class="mb-1">{props.detalle}</p>
        </ul>
      </div>
    </div>
  );
}
export default CardCultivo;
