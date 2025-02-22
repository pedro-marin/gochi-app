import React from "react";

const InfoBeneCard = (props) => {
  let data = props.info_beneficios;
  const beneficios = data.map((beneficio, index) => (
    
    <li key={index}>
      <p>{beneficio.descripcion}</p>
    </li>
    
  ));
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0 pb-2">Beneficios</h3>
          <ul>{beneficios}</ul>
        </div>
        <div className="col-auto d-none d-lg-block"></div>
      </div>
    </div>
  );
};

export default InfoBeneCard;
