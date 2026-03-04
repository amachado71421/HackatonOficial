import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Login.css';
import api from '../../services/fech.js'; // 1. Importar nuestro servicio de API

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores previos

    // 2. Usar async/await y try/catch para manejar la petición
    try {
      // 3. Hacer la petición POST a la ruta /login del backend
      const response = await api.post('/login', { 
        email: email, 
        password: password 
      });

      // 4. Si la petición es exitosa...
      console.log('Respuesta del servidor:', response.data);
      // Aquí guardarías el token, redirigirías al usuario, etc.
      // Por ejemplo: localStorage.setItem('token', response.data.token);

    } catch (err) {
      // 5. Si hay un error...
      console.error('Error en el inicio de sesión:', err);
      setError('Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.');
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