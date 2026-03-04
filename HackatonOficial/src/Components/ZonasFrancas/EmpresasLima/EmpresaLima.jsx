import React from "react";
import { useNavigate } from "react-router-dom";

const EmpresaLima = ({ EmpresasZFLima }) => {

  const navigate = useNavigate();

  const irADetalle = () => {
    navigate(`/empresa/${EmpresasZFLima.id}`);
  };

  return (
    <div
      className="zf-card-container"
      id={`zf-card-id-${EmpresasZFLima.id}`}
      name={`zf-card-name-${EmpresasZFLima.nombre}`}
      onClick={irADetalle}
      style={{ cursor: "pointer" }}
    >
      <div className="zf-card-image-wrapper">
        <img
          src={EmpresasZFLima.imagen}
          alt={EmpresasZFLima.nombre}
          className="zf-card-image-element"
        />
      </div>

      <div className="zf-card-content-area">
        <h3 className="zf-card-title-text">
          {EmpresasZFLima.nombre}
        </h3>

        {/* Características de empresa */}
        <p className="zf-card-location-text">
          Sector: {EmpresasZFLima.sector} | Tamaño: {EmpresasZFLima.tamano}
        </p>

        <div className="zf-card-tags-group">
          {EmpresasZFLima.beneficios.map((beneficio, index) => (
            <span
              key={index}
              className="zf-card-tag-item"
            >
              {beneficio}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpresaLima;