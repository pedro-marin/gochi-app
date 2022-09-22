import React from "react";
import { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import gochi_logo from "../../assets/img/gochi_logo_sf.svg";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { withRouter } from "react-router-dom";
import "../../stylesheets/Home.css";

const Registro = (props) => {
  useEffect(() => {
    document.title = "mihuertafacil - Registro";
  }, []);

  const [username, setUsername] = useState("");
  const [nombre=true, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarpassword, setConfirmarpassword] = useState("");
  const [error, setError] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,12}$/, // 6 a 12 digitos.
    correo: /^\w+([.-_+]?\w+)*@(gmail||hotmail)*\.(cl||com)+$/,
  };

  const procesarInputs = (event) => {
    event.preventDefault();
    if (!nombre.trim()) {
      setError("Ingrese su nombre");
      return;
    }
    if (expresiones.nombre.test(nombre) === false) {
      setError("Nombre no valido, recuerde ingresar solo letras y acentos");
      return;
    }
    if (!apellido.trim()) {
      setError("Ingrese su apellido");
      return;
    }
    if (expresiones.nombre.test(apellido) === false) {
      setError("Apellido no valido, , recuerde ingresar solo letras y acentos");
      return;
    }
    if (!username.trim()) {
      setError("Ingrese nombre de usuario");
      return;
    }
    if (expresiones.usuario.test(username) === false) {
      setError(
        "Usuario no valido, , recuerde ingresar solo letras, numeros y guion o guion bajo"
      );
      return;
    }
    if (!email.trim()) {
      setError("Ingrese su Email");
      return;
    }
    if (expresiones.correo.test(email) === false) {
      setError("Correo no invalido");
      return;
    }
    if (expresiones.password.test(contrasena) === false) {
      setError("Contraseña no invalida");
      return;
    }
    if (!contrasena.trim()) {
      setError("Ingresa su Contraseña");
      return;
    }
    if (!confirmarpassword.trim()) {
      setError("Confirme su contraseña");
      return;
    }
    if (contrasena !== confirmarpassword) {
      setError("No coincide contraseña");
      return;
    }
    setError(null);
    registrarFirebase();
  };

  const registrarFirebase = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, contrasena);
      await db
        .collection("usuarios")
        .doc(res.user.uid)
        .set({
          username: username,
          uid: res.user.uid,
          displayName: nombre + " " + apellido,
          email: res.user.email,
          img_profile: "",
          about_me: "",
          instagram: {
            exist: false,
            url: "",
          },
          facebook: {
            exist: false,
            url: "",
          },
          youtube: {
            exist: false,
            url: "",
          },
        });
setNombre("hola");
      setContrasena("");
      setEmail("");
      setError(null);
      props.history.push("/userprofile");
      props.history.go(0);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Correo electrónico no válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [username, nombre, apellido, email, contrasena, props.history]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div
          className="contenedortodo col-11 col-sm-8 col-md-6 col-xl-6 rounded"
          style={{
            backgroundColor: "#e7f6a8",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#b3c760",
          }}
        >
          <form onSubmit={procesarInputs}>
            <img
              className="mx-auto d-block"
              src={gochi_logo}
              alt=""
              width="30%"
              height="30%"
            />
            <h1 className="h2 mb-5 text-center">
              Iníciate en el autocultivo con Gochi
            </h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <p>
              <strong>Ingresa tus datos</strong>
            </p>
            
            <div className="row g-3 mb-3">
              <div className="col-md">
                <label
                  htmlFor="nombre_form"
                  className="s-mb-1 s-weight-semibold small"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_form"
                  placeholder="Escribe tu nombre"
                  onChange={(event) => setNombre(event.target.value)}
                  value={nombre}
                />
              </div>
              <div className="col-md">
                <label
                  htmlFor="apellido_form"
                  className="s-mb-1 s-weight-semibold small"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido_form"
                  placeholder="Escribe tu apellido"
                  onChange={(event) => setApellido(event.target.value)}
                  value={apellido}
                />
              </div>
            </div>
            <div className="col-md">
              <label
                htmlFor="username_form"
                className="s-mb-1 s-weight-semibold small"
              >
                Nombre de usuario
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="username_form"
                placeholder="Ingresa tu nombre de usuario"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </div>
            <div className="col-md">
              <label
                htmlFor="email_form"
                className="s-mb-1 s-weight-semibold small"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="email_form"
                placeholder="name@example.com"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md">
                <label
                  htmlFor="form_contrasena"
                  className="s-mb-1 s-weight-semibold small"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="form_contrasena"
                  placeholder="Escribe tu contraseña"
                  onChange={(event) => setContrasena(event.target.value)}
                  value={contrasena}
                />
              </div>
              <div className="col-md">
                <label
                  htmlFor="floatingPassword"
                  className="s-mb-1 s-weight-semibold small"
                >
                  Confirma tu contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Escribe tu contraseña otra vez"
                  onChange={(event) => setConfirmarpassword(event.target.value)}
                  value={confirmarpassword}
                />
              </div>
            </div>
            <div className="text-center s-mb-2 m-cols-2 mb-3">
              <input
                type="checkbox"
                className="me-2"
                name="accept"
                id="accpet"
                required="hola"
              />
              <label htmlFor="accept" className="s-mb-0">
                Aceptar
                <a
                  href="/terminos-y-condiciones"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Términos y condiciones
                </a>
              </label>
            </div>
            <button
              className="w-100 btn btn-lg"
              style={{ backgroundColor: "#b3c760" }}
              type="submit"
            >
              Registrarse
            </button>
            <p className="mb-3 text-muted text-center">
              ¿Ya estas registrado? <a href="/login">Inicia Sesión</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Registro);
