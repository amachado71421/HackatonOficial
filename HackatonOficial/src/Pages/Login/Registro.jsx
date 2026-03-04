import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Registro.css';

const Register = () => {
  const [userType, setUserType] = useState('aspirante'); // Estado para guardar el rol
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(''); // Estado para errores
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar error cuando el usuario comienza a escribir
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Validar longitud mínima de contraseña
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    // Redirigir basado en el rol seleccionado (corregido para coincidir con Routes.jsx)
    switch (userType) {
      case 'aspirante':
        navigate('/registro/pasantes');
        break;
      case 'practicante':
        navigate('/registro/empleados');
        break;
      case 'empresa':
        navigate('/registro/empresas');
        break;
      case 'institucion':
        navigate('/registro/institucion');
        break;
      default:
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
              name="nombre"
              className="pill-input" 
              placeholder="Nombre completo" 
              value={formData.nombre}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              name="email"
              className="pill-input" 
              placeholder="Correo electrónico" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              name="password"
              className="pill-input" 
              placeholder="Contraseña" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              name="confirmPassword"
              className="pill-input" 
              placeholder="Confirmar contraseña" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
          </div>

          {/* Mensaje de error */}
          {error && <div className="error-message">{error}</div>}

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
