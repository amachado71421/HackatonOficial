import React from "react";
import "../../styles/ZonaFranca/ZonaFranca.css";

const ZonaFranca = ({ datosZona }) => {
  return (
    <div
      className="zf-card-container"
      id={`zf-card-id-${datosZona.id}`}
      name={`zf-card-name-${datosZona.nombre}`}
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