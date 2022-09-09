import React from "react";
import CardCultivo from "./CardCultivo";

const ComoCultivar = (props) => {
  return (
    <div
      className="py-3 bg-white"
      style={{
        borderBottomStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      <h2 className="mb-1 pb-3 text-center">Como Cultivar</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" bis_skin_checked="1">
        <CardCultivo
          nombre_titulo="Tamaño maceta"
          icondecultivo="https://cdn.lordicon.com/bxhycwah.json"
          infocomo_cultivar={props.infocomo_cultivar.cul_tamano_maceta_go}
          iconeimagen={"icon"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Espacio maceta"
          icondecultivo="https://img.icons8.com/office/80/000000/blueprint.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_tamano_maceta_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Transplantar en"
          icondecultivo="https://img.icons8.com/office/80/000000/hand-planting.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_transplantar_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Plantar en casa"
          icondecultivo="https://cdn.lordicon.com/cxfjebxp.json"
          infocomo_cultivar={props.infocomo_cultivar.cul_plantar_casa_go}
          iconeimagen={"icon"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo={"Piso termico"}
          icondecultivo="https://img.icons8.com/clouds/100/000000/greenhouse-effect.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_termico_piso_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Temperatura maxima"
          icondecultivo="https://img.icons8.com/office/80/000000/thermometer.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_max_temp_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Temperatura minima"
          icondecultivo="https://img.icons8.com/office/80/000000/dew-point.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_min_temp_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Cantidad de riego"
          icondecultivo="https://img.icons8.com/office/80/000000/plant-under-rain.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_riego_cantidad_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Luz solar"
          icondecultivo="https://img.icons8.com/office/80/000000/summer.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_riego_cantidad_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
          <CardCultivo
          nombre_titulo="Altura maxima"
          icondecultivo="https://img.icons8.com/plasticine/100/000000/deciduous-tree.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_maxima_altura_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
         <CardCultivo
          nombre_titulo="Profundida de siembra"
          icondecultivo="https://img.icons8.com/office/80/000000/paper-bag-with-seeds.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_sembrar_profundidad_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Separación entre plantas"
          icondecultivo="https://img.icons8.com/office/80/000000/forest.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_planta_separacion_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
        <CardCultivo
          nombre_titulo="Tipo suelo"
          icondecultivo="https://img.icons8.com/office/80/000000/soil.png"
          infocomo_cultivar={props.infocomo_cultivar.cul_suelo_tipo_go}
          iconeimagen={"imagen"}
        ></CardCultivo>
      </div>
    </div>
  );
};

export default ComoCultivar;
