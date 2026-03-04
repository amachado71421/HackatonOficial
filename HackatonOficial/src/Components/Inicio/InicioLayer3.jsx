import React from "react";
import "../../Styles/Inicio/InicioLayer3.css";

const InicioLayer3 = () => {
  return (
    <section className="inicio-layer3-container">
      <div className="inicio-layer3-content">
        <h2 className="inicio-layer3-title">
          Beneficios de trabajar en la Zona Franca
        </h2>

        <div className="inicio-layer3-grid">
          {/* Card 1 */}
          <div className="inicio-layer3-card">
            <div className="inicio-layer3-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
                alt="Salarios competitivos"
                className="inicio-layer3-image"
              />
            </div>
            <div className="inicio-layer3-card-body">
              <h3 className="inicio-layer3-card-title">
                Salarios competitivos
              </h3>
              <p className="inicio-layer3-card-text">
                Remuneración acorde a mercado y paquetes que incluyen beneficios
                sociales y estabilidad.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="inicio-layer3-card">
            <div className="inicio-layer3-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Desarrollo profesional"
                className="inicio-layer3-image"
              />
            </div>
            <div className="inicio-layer3-card-body">
              <h3 className="inicio-layer3-card-title">
                Desarrollo profesional
              </h3>
              <p className="inicio-layer3-card-text">
                Capacitación continua y oportunidades para ascenso en empresas
                multinacionales y locales.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="inicio-layer3-card">
            <div className="inicio-layer3-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Ambiente inclusivo"
                className="inicio-layer3-image"
              />
            </div>
            <div className="inicio-layer3-card-body">
              <h3 className="inicio-layer3-card-title">
                Ambiente inclusivo
              </h3>
              <p className="inicio-layer3-card-text">
                Compromiso con diversidad, equidad e iniciativas de
                responsabilidad social empresarial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InicioLayer3;