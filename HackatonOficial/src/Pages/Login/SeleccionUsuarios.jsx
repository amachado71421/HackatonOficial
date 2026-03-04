import React from "react";
import "../../styles/SeleccionUsuarios.css";
import { User, GraduationCap, Building2, School, Shield } from "lucide-react";

const SeleccionUsuarios = () => {
  return (
    <div className="seleccion-container">
      
      {/* Header */}
      <header className="seleccion-header">
        <div className="logo-mini">
          <img className="LogoUsuario" src="src/Images/Logo.jpg" alt="Logo Zona Franca Empleo" />
          <span className="logo-text">Zona Franca Empleo</span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="seleccion-main">
        <h1 className="seleccion-title">
          Bolsa de Empleo <span>Zona Franca</span>
        </h1>

        <p className="seleccion-subtitle">
          Conectamos el talento con las mejores empresas de la zona franca
          líder en Costa Rica.
        </p>

        <p className="seleccion-instruccion">
          SELECCIONA TU PERFIL PARA CONTINUAR
        </p>

        <div className="cards-container">
          <div className="card">
            <User size={40} />
            <h3>Aspirante</h3>
            <p>Busco empleo en la zona franca.</p>
          </div>

          <div className="card">
            <GraduationCap size={40} />
            <h3>Practicante</h3>
            <p>Busco mi primera experiencia profesional.</p>
          </div>

          <div className="card">
            <Building2 size={40} />
            <h3>Empresa</h3>
            <p>Busco talento para mi organización.</p>
          </div>

          <div className="card">
            <School size={40} />
            <h3>Institución</h3>
            <p>Vinculo a mis estudiantes con empresas.</p>
          </div>

          <div className="card">
            <Shield size={40} />
            <h3>Administrativo</h3>
            <p>Gestión interna de la plataforma.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeleccionUsuarios;