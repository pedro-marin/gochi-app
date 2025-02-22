import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../assets/img/gochi_logo_sf.svg'

const Footer = () => {
  return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top px-4">
            <p className="col-12 col-md-4 mb-0 text-center text-md-start text-muted">© 2022 mihuertafacil - Chile - <a href="https://icons8.com/icon/1_ZaI6jvDGNo/suelo" style={{textDecoration:"none", color:"#333" }} >Patrocinio icons8</a> </p>
            <a href="/" className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-0 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src={gochi_logo} width = "9%" height="9%" alt="mihuertafacil"/>
            </a>
            <ul className="nav col-12 col-md-4 justify-content-center justify-content-lg-end">
            <li className="nav-item "><a href="/" className="nav-link ps-0 text-muted">Home</a></li>
            <li className="nav-item "><a href="/nosotros" className="nav-link ps-0 text-muted">Nosotros</a></li>
            <li className="nav-item "><a href="https://z-p15.www.instagram.com/mihuertafacil_/" className="nav-link ps-0  text-danger"><BsInstagram /></a></li>
            <li className="nav-item "><a href="https://www.facebook.com/profile.php?id=100085545664815" className="nav-link ps-0  text-primary"><BsFacebook/></a></li>
            <li className="nav-item "><a href="/" className="nav-link ps-0 text-info"><BsTwitter/> </a></li>
            </ul>
        </footer>
  )
}

export default Footer