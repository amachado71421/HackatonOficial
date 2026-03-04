import React from "react";
import "../../Styles/Inicio/InicioLayer4.css";

const LayerInicio4 = () => {
  return (
    <section className="layerinicio4-container">
      <div className="layerinicio4-content">
        <h2 className="layerinicio4-title">
          Cómo postularte: Guía paso a paso para candidatos
        </h2>

        <div className="layerinicio4-steps">

          {/* Paso 1 */}
          <div className="layerinicio4-step-card">
            <div className="layerinicio4-step-number">1</div>
            <div className="layerinicio4-step-body">
              <h3 className="layerinicio4-step-title">Accede al portal</h3>
              <p className="layerinicio4-step-text">
                Ingresa a www.zonafrancaempleo.com y selecciona 
                "QUIERO POSTULARME".
              </p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="layerinicio4-step-card">
            <div className="layerinicio4-step-number">2</div>
            <div className="layerinicio4-step-body">
              <h3 className="layerinicio4-step-title">Regístrate</h3>
              <p className="layerinicio4-step-text">
                Crea usuario, completa tus datos y sube hoja de vida actualizada 
                (SPE recomendado).
              </p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="layerinicio4-step-card">
            <div className="layerinicio4-step-number">3</div>
            <div className="layerinicio4-step-body">
              <h3 className="layerinicio4-step-title">Aplica</h3>
              <p className="layerinicio4-step-text">
                Explora vacantes, filtra por ubicación y sector, y postula 
                directamente con tus credenciales. Recibirás notificaciones y 
                orientación para cada etapa del proceso de selección.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LayerInicio4;