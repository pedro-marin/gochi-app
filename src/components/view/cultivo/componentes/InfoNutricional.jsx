import React from "react";

const InfoNutricional = (props) => {
 
 return (
    <div
      className="py-3"
      style={{
        borderStyle: "solid none",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      <h2 className="blog-post-title mb-1">Informacion Nutricional</h2>
      <br />
      <table
        className="table table-striped-columns"
        style={{ border: "4px solid #e7f6a8" }}
      >
        <tbody>
          <tr>
            <td colSpan="3">
              Porción:{props.info_nutricional.cul_porcion_go} Porciones por envase:
            </td>
          </tr>
          <tr>
            <td></td>
            <td>100g</td>
            <td>1 porción</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Energía (Kcal)</td>
            <td>{props.info_nutricional.cul_energia_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_energia_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Proteínas (g)</td>
            <td>{props.info_nutricional.cul_proteinas_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_proteinas_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Grasa total (g)</td>
            <td>{props.info_nutricional.cul_grasa_total_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_grasa_total_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Hidratos de carbono disponibles (g)</td>
            <td>{props.info_nutricional.cul_carbohidratos_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_carbohidratos_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Fibra dietética total (g)</td>
            <td>{props.info_nutricional.cul_fibra_dietetica_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_fibra_dietetica_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sodio (mg)</td>
            <td>{props.info_nutricional.cul_sodio_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_sodio_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Potasio (mg)</td>
            <td>{props.info_nutricional.cul_potasio_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_potasio_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>*</td>
          </tr>
          <tr>
            <td>Vitamina A (µ ER)</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_vit_a_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_vit_a_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Vitamina C (mg)</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_vit_c_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_vit_c_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Vitamina E (mg ET)</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_vit_e_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_vit_e_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Ac. Fólico (µg)</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_acido_folico_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_acido_folico_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Calcio (mg)</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_calcio_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_calcio_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td>Hierro (mg)</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_hierro_go.cul_cien_go}</td>
            <td>{props.info_nutricional.cul_vitaminas_go.cul_hierro_go.cul_porcion_go}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">* % en relación a la Dosis Diaria Recomendada</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoNutricional;
