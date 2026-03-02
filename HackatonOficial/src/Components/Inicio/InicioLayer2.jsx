import React from "react";
import "../../Styles/Inicio/InicioLayer2.css";

const InicioLayer2 = () => {
  return (
    <section className="inicio-layer2-container">
      <div className="inicio-layer2-content">
        <h2 className="inicio-layer2-title">
          ¿Qué es una Zona Franca y por qué trabajar aquí?
        </h2>

        <div className="inicio-layer2-grid">
          {/* Columna 1 */}
          <div className="inicio-layer2-card">
            <div className="inicio-layer2-icon">💼</div>
            <h3 className="inicio-layer2-card-title">Incentivos fiscales</h3>
            <p className="inicio-layer2-card-text">
              Regímenes tributarios y aduaneros que atraen inversión y permiten
              competitividad empresarial.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="inicio-layer2-card">
            <div className="inicio-layer2-icon">🏭</div>
            <h3 className="inicio-layer2-card-title">Ecosistema productivo</h3>
            <p className="inicio-layer2-card-text">
              Más de 400 empresas y 20,000 empleos directos en la Zona Franca de
              Bogotá, con redes de proveedores y talento.
            </p>
          </div>

          {/* Columna 3 */}
          <div className="inicio-layer2-card">
            <div className="inicio-layer2-icon">🚀</div>
            <h3 className="inicio-layer2-card-title">
              Innovación y crecimiento
            </h3>
            <p className="inicio-layer2-card-text">
              Ambiente propicio para proyectos en logística, manufactura
              avanzada y tecnología.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InicioLayer2;