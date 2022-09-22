import React from "react";
import CardCultivo from "../componentes/CardCultivo";

const CuandoCultivar = (props) => {
  return (
    <div
      className="py-3 bg-white"
      style={{
        borderBottomStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      <h2 className="mb-1 pb-3 text-center">Cuando Cultivar</h2>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
        bis_skin_checked="1"
      >
        <CardCultivo
          nombre_titulo="Germina en"
          icondecultivo="https://img.icons8.com/color/96/000000/sprout.png"
          detalle={props.info_cuando_cultivar.cul_germina_en_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Cosechar en"
          icondecultivo="https://img.icons8.com/color/96/000000/growing-plant.png"
          detalle={props.info_cuando_cultivar.cul_cosechar_en_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo 
        nombre_titulo="Temporada siembra"
        iconotoño="https://img.icons8.com/fluency/96/000000/autumn.png"
        iconverano="https://img.icons8.com/office/80/000000/summer.png"
        iconinvierno="https://img.icons8.com/office/80/000000/winter.png"
        iconprimavera="https://img.icons8.com/office/80/000000/spring.png"
        estacion={props.info_cuando_cultivar.cul_temporada_siembra_go}
        detalle={props.info_cuando_cultivar.cul_temporada_siembra_go}
        ></CardCultivo>

        
      </div>
    </div>
  );
};

export default CuandoCultivar;
