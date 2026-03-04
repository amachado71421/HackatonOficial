import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/Registro.css";


const Register = () => {
  const [userType, setUserType] = useState('aspirante'); // Estado para guardar el rol
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirigir basado en el rol seleccionado
    switch (userType) {
      case 'aspirante':
        navigate('/registro-aspirante');
        break;
      case 'practicante':
        navigate('/registro-practicante');
        break;
      case 'empresa':
        navigate('/registro-empresa');
        break;
      case 'institucion':
        navigate('/registro-institucion');
        break;
      default:
        // Opcional: manejar un caso por defecto
        console.log("Por favor, selecciona un tipo de cuenta.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Crear Cuenta</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          
          {/* Campo para seleccionar el tipo de cuenta */}
          <div className="form-group">
            <select 
              className="pill-input" 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="aspirante">Aspirante</option>
              <option value="practicante">Practicante</option>
              <option value="empresa">Empresa</option>
              <option value="institucion">Institución</option>
            </select>
          </div>

          <div className="form-group">
            <input 
              type="text" 
              className="pill-input" 
              placeholder="Nombre completo" 
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              className="pill-input" 
              placeholder="Correo electrónico" 
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              className="pill-input" 
              placeholder="Contraseña" 
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              className="pill-input" 
              placeholder="Confirmar contraseña" 
              required 
            />
          </div>

          <button type="submit" className="btn-primary-pill">
            SIGUIENTE
          </button>
        </form>

        <div className="footer-text">
          <span className="footer-text-content">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="link-text">
              inicia sesión
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;