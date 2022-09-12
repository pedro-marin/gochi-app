import React from "react";

function CardMBFM(props) {
  const estilo = {
    with: "100px",
    height: "150px",
    clipPath: `polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)`,
  };
  return (
    <div
      className="col"
      style={{
        borderBottomStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      <div class="card text-center" style={{ borderStyle: "none" }}>
        {" "}
        <ul className="icon-list ps-0 mb-0">
          <img
            alt="imagen"
            src={props.imagen}
            loading="lazy"
            style={estilo}
          />

          <h2 className="">{props.name}</h2>
          <p className="">{props.descripcion}</p>
          <p>
            <a className="btn btn-secondary" href="/">
              View details »
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
}

export default CardMBFM;
