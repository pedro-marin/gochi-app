import React from "react";
import "https://cdn.lordicon.com/xdjxvujz.js";
import { RiHandHeartLine } from "react-icons/ri";
import { MdWbSunny } from "react-icons/md";
import { FaCloudRain } from "react-icons/fa";
const CuandoCultivar = (props) => {
  return (
    <div
      className="py-3"
      style={{
        borderBottomStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      <h2 className="mb-1 pb-2">Cuando Cultivar</h2>
      <div class="row g-1" bis_skin_checked="1">
        <div class="col-md-4" bis_skin_checked="1">
          <p className="fs-5 fw-bold">Germina en</p>
          <p></p>
          <ul class="icon-list ps-0 ">
            <lord-icon               src="https://cdn.lordicon.com/rwbjpegh.json"
              trigger="hover"
              style={{ width: "30%", height: "10%" }}
            ></lord-icon>
            <li class="d-flex align-items-center mb-1">
              {props.info_cuando_cultivar.cul_germina_en_go}
            </li>
          </ul>
        </div>

        <div class="col-md-4" bis_skin_checked="1">
          <p className="fs-5 fw-bold">Cosechar en</p>
          <p></p>
          <ul class="icon-list ps-0">
          <img src="https://img.icons8.com/color/96/000000/growing-plant.png" alt="imagen" style={{ width: "30%", height: "10%"}}/>
            
            <li class="d-flex align-items-center mb-1">
              {props.info_cuando_cultivar.cul_cosechar_en_go}
            </li>
          </ul>
        </div>
        <div class="col-md-4" bis_skin_checked="1">
          <p className="fs-5 fw-bold">Temporada</p>
          <div class="">
            {" "}
            <ul class="icon-list ps-0">
              {props.info_cuando_cultivar.cul_temporada_siembra_go ===
              "Otoño" ? (
                <>
                  <lord-icon
                    src="https://cdn.lordicon.com/ekjuxqnh.json"
                    trigger="hover"
                    style={{ width: "30%", height: "10%" }}
                  ></lord-icon>
                  <li class="d-flex align-items-center mb-1">
                    {props.info_cuando_cultivar.cul_temporada_siembra_go}
                  </li>{" "}
                </>
              ) : null}
              {(props.info_cuando_cultivar.cul_temporada_siembra_go ===
                "Verano") || (props.info_cuando_cultivar.cul_temporada_siembra_go) === "Todas las estaciones" ? (
                <>
                  
                    <MdWbSunny
                      src="https://cdn.lordicon.com/hbbeevsh.json"
                      trigger="hover"
                      style={{ width: "30%", height: "10%", color: "#F2E544" }}
                    ></MdWbSunny><li class="d-flex text-start mb-1">
                    {props.info_cuando_cultivar.cul_temporada_siembra_go}
                  </li>
                    
                </>
              ) : null}
              {props.info_cuando_cultivar.cul_temporada_siembra_go ===
              "Primavera" ? (
                <>
                  <lord-icon
                    src="https://cdn.lordicon.com/ikgpexar.json"
                    trigger="hover"
                    style={{ width: "30%", height: "10%" }}
                  ></lord-icon>
                  <li class="d-flex text-start mb-1">
                    {props.info_cuando_cultivar.cul_temporada_siembra_go}
                  </li>
                </>
              ) : null}
              {props.info_cuando_cultivar.cul_temporada_siembra_go ===
              "Invierno" ? (
                <>
                  <li class="d-flex align-items-center mb-1">
                    <FaCloudRain
                      className="pt-3 pe-2 "
                      src="https://cdn.lordicon.com/hbbeevsh.json"
                      trigger="hover"
                      style={{ width: "20%", height: "10%", color: "#5CC3E2 " }}
                    ></FaCloudRain>
                    {props.info_cuando_cultivar.cul_temporada_siembra_go}
                  </li>{" "}
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuandoCultivar;
