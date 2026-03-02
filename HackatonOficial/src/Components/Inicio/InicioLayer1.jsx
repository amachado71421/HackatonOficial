import React from "react";
import "../../Styles/Inicio/InicioLayer1.css";

const InicioLayer1 = () => {
  return (
    <section className="inicio-layer1-container">
      <div className="inicio-layer1-overlay">
        <div className="inicio-layer1-content">
          <h1 className="inicio-layer1-title">
            Portal de Empleos en Zona Franca: Tu Puerta a Oportunidades Laborales
          </h1>

          <p className="inicio-layer1-description">
            Conecta con vacantes en logística, tecnología e industria dentro de
            zonas francas. Plataformas seguras, procesos claros y cientos de
            empresas buscando talento local y especializado.
          </p>

          <div className="inicio-layer1-buttons">
            <button className="inicio-layer1-btn-primary">
              Explorar ofertas
            </button>
            <button className="inicio-layer1-btn-secondary">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InicioLayer1;