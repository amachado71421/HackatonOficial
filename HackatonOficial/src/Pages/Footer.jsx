import React, { useState } from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBuilding, FaUserGraduation, FaUserTie, FaCog } from 'react-icons/fa';

const ZFLLPlatform = () => {
  // Roles: 'aspirante', 'practicante', 'empresa', 'institucion', 'admin'
  const [userRole, setUserRole] = useState('aspirante'); 
  const [activeTab, setActiveTab] = useState('vacantes');

  const menuData = {
    aspirante: { title: "Portal de Empleo", tabs: ["vacantes", "mis postulaciones", "mi primer perfil (prácticas)"] },
    practicante: { title: "Mi Primera Semilla", tabs: ["pasantías", "empleos", "mi perfil académico"] },
    empresa: { title: "Gestión de Talento", tabs: ["candidatos", "pasantes", "centros de formación", "mis vacantes"] },
    institucion: { title: "Vinculación Estudiantil", tabs: ["mis grupos", "subir base de datos", "programas"] },
    admin: { title: "Panel de Control ZFLL", tabs: ["usuarios", "contenidos", "reportes"] }
  };

  return (
    <div className="platform-wrapper">
      {/* Header con selector de perfil para demo */}
      <header className="platform-header">
        <div className="logo-section">
          <img src="/logo-zfll.png" alt="ZFLL" className="logo-img" />
          <span className="logo-divider">|</span>
          <span className="system-name">Bolsa de Empleo</span>
        </div>
        
        <nav className="role-switcher">
          <select onChange={(e) => setUserRole(e.target.value)} value={userRole}>
            <option value="aspirante">Aspirante</option>
            <option value="practicante">Practicante</option>
            <option value="empresa">Empresa</option>
            <option value="institucion">Institución</option>
            <option value="admin">Administrador</option>
          </select>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-header">
          <h1>{menuData[userRole].title}</h1>
          <div className="tab-navigation">
            {menuData[userRole].tabs.map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <section className="dashboard-view">
          {/* Aquí iría la lógica de cada vista según el tab */}
          <div className="placeholder-card">
            <p>Mostrando vista de: <strong>{activeTab}</strong> para el perfil de <strong>{userRole}</strong></p>
          </div>
        </section>
      </main>

      {/* Footer Adaptado a Requerimientos */}
      <footer className="zfll-footer">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-brand">Zona Franca La Lima</div>
            <p className="footer-tagline">Conectando talento con el futuro industrial de Costa Rica.</p>
            <div className="contact-details">
              <span>Tel: +506 2104-0550</span>
              <span>Email: info@lalimafreezone.com</span>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Secciones</h4>
            <ul>
              <li><a href="#">Bolsa de Trabajo</a></li>
              <li><a href="#">Mi Primera Semilla (Prácticas)</a></li>
              <li><a href="#">Centros de Formación</a></li>
              <li><a href="#">Portal de Empresas</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre ZFLL</a></li>
              <li><a href="#">Sostenibilidad</a></li>
              <li><a href="#">Noticias</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4>Síguenos</h4>
            <div className="icon-row">
              <a href="#" className="s-icon"><FaFacebookF /></a>
              <a href="#" className="s-icon"><FaLinkedinIn /></a>
              <a href="#" className="s-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="legal">
            <a href="#">Política de Privacidad</a>
            <a href="#">Uso de Datos (Consentimiento)</a>
            <a href="#">Aviso Legal</a>
          </div>
          <div className="copy">
            © {new Date().getFullYear()} Zona Franca La Lima. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZFLLPlatform;