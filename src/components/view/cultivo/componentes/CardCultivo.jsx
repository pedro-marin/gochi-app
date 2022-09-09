import React from "react";
import "../stylecomponente/cardcultivo.css";

function CardCultivo(props) {
  return (
    <div class="col" bis_skin_checked="1">
      <div className="card text-center" style={{borderStyle: "none"}}>
      <p className="fs-5 fw-bold ">{props.nombre_titulo}</p>
      <ul class="icon-list ps-0 mb-0">
     
        {props.iconeimagen === "icon" ? (
          <>
            <lord-icon 
              src={props.icondecultivo}
              trigger="hover"
              style={{ width: "30%", height: "10%"}}
            ></lord-icon>
          </>
        ) : null}
        {props.iconeimagen === "imagen" ? (
          <>
            <img
              src={props.icondecultivo}
              alt="imagen"
              style={{ width: "30%", height: "10%"}}
            />
          </>
        ) : null}

        <p class="mb-1">
          {props.infocomo_cultivar}
        </p>
      </ul>
    </div>
    </div>
  );
}
export default CardCultivo;
