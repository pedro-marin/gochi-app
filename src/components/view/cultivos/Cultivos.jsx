import React, { useEffect } from "react";
import { withRouter } from "react-router";
import Album from "./componentes/Album";

const Cultivos = (props) => {
  useEffect(() => {
    /*if (auth.currentUser) {
      console.log("✔");
    } else {
      props.history.push("/login");
    }*/
    document.title = `mihuertafacil - ${props.categoria}`;
  }, [props]);
  return (
    <div>
      {props.categoria}
      <Album categoria={props.categoria} />
    </div>
  );
};

export default withRouter(Cultivos);
