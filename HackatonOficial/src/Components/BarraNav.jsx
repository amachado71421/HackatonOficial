import React from "react";
import "../styles/BarraNav.css";

const BarraNav = () => {
  return (
    <nav className="barranav-contenedor-principal">
      <div className="barranav-contenedor-interno">

        {/* Logo */}
        <div className="barranav-seccion-logo">
          <img 
            src="src/Images/Logo.jpg"
            alt="Logo ZFE" 
            className="barranav-imagen-logo"
          />
        </div>
        <div>
          <h1 className="TituloLogo">Zona Franca Empleos</h1>
        </div>
        {/* Enlaces */}
        <ul className="barranav-lista-enlaces">
          <li className="barranav-item-enlace">
            <a href="/" className="barranav-link">Inicio</a>
          </li>
          <li className="barranav-item-enlace">
            <a href="/empleos" className="barranav-link">Empleos</a>
          </li>
          <li className="barranav-item-enlace">
            <a href="/empresas" className="barranav-link">Empresas</a>
          </li>
          <li className="barranav-item-enlace">
            <a href="/recursos" className="barranav-link">Recursos</a>
          </li>
        </ul>

        {/* Botones */}
        <div className="barranav-seccion-botones">
          <a 
            href="/zonas-francas"
            className="barranav-boton-zonas-francas"
          >
            Zonas Francas
          </a>

          <a 
            href="/login" 
            className="barranav-boton-iniciar"
          >
            Iniciar Sesión
          </a>
        </div>

      </div>
    </nav>
  );
};

export default BarraNav;