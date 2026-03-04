import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/Login.css';
import api from '../../services/fech.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/login', { 
        email: email, 
        password: password 
      });

      console.log('Respuesta del servidor:', response.data);

      if (response.data.success) {
        // Guardar información del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('userType', response.data.user_type);
        
        // Redirigir según el tipo de usuario
        switch (response.data.user_type) {
          case 'empresa':
            navigate('/perfil/empresas');
            break;
          case 'empleado':
            navigate('/perfil/empleados');
            break;
          case 'pasante':
            navigate('/perfil/pasantes');
            break;
          case 'institucion':
            navigate('/perfil/institucion');
            break;
          default:
            navigate('/');
        }
      }

    } catch (err) {
      console.error('Error en el inicio de sesión:', err);
      const errorMessage = err.response?.data?.error || 'Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.';
      setError(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Iniciar Sesión</h1>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="input-label">Correo o ID</label>
            <input 
              type="text" 
              className="pill-input" 
              placeholder="Escribe tu correo o ID" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label className="input-label">Contraseña</label>
            <input 
              type="password" 
              className="pill-input" 
              placeholder="Escribe tu contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-primary-pill">
            INICIAR SESIÓN
          </button>
        </form>

        <div className="footer-text">
          <span className="footer-text-content">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="link-text">
              regístrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;