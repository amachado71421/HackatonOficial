import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ZonaFranca/ZonaFranca.css";

const ZonaFranca = ({ datosZona }) => {

  const navigate = useNavigate();

  const irADetalle = () => {
    if (datosZona.nombre === "La Lima Free Zone") {
      navigate("/zonas-EmpresaLima");
    }
  };

  return (
    <div
      className="zf-card-container"
      id={`zf-card-id-${datosZona.id}`}
      name={`zf-card-name-${datosZona.nombre}`}
      onClick={irADetalle}
      style={{ cursor: "pointer" }}
    >
      <div className="zf-card-image-wrapper">
        <img
          src={datosZona.imagen}
          alt={datosZona.nombre}
          className="zf-card-image-element"
        />
      </div>

      <div className="zf-card-content-area">
        <h3 className="zf-card-title-text">
          {datosZona.nombre}
        </h3>

        <p className="zf-card-location-text">
          {datosZona.ciudad}, {datosZona.pais}
        </p>

        <div className="zf-card-tags-group">
          {datosZona.categorias.map((cat, index) => (
            <span
              key={index}
              className="zf-card-tag-item"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZonaFranca;