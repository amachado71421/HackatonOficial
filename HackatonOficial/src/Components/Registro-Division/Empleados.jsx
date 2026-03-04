import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/fech.js';

function Empleados() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    cedula: '',
    fecha_nacimiento: '',
    correo: '',
    telefono: '',
    password: '',
    confirmar_password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmar_password) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/empleados/', {
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        cedula: formData.cedula,
        fecha_nacimiento: formData.fecha_nacimiento,
        correo: formData.correo,
        telefono: formData.telefono,
        password: formData.password
      });

      if (response.status === 201) {
        alert('Empleado registrado exitosamente. Ahora puedes iniciar sesión.');
        navigate('/Login');
      }
    } catch (err) {
      console.error('Error en el registro:', err);
      if (err.response?.data) {
        const errorMessages = Object.entries(err.response.data)
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ');
        setError(errorMessages);
      } else {
        setError('Error al registrar el empleado. Inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVolver = () => {
    navigate('/Login');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h4>Formulario de Empleados</h4>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nombre">Nombre:</label><br />
          <input 
            className="NombreEmpleado" 
            type="text" 
            id="nombre" 
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="apellidos">Apellidos:</label><br />
          <input 
            className="ApellidosEmpleado" 
            type="text" 
            id="apellidos" 
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cedula">Número de Cédula:</label><br />
          <input 
            className="CedulaEmpleado" 
            type="text" 
            id="cedula" 
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label><br />
          <input 
            className="FechaEmpleado" 
            type="date" 
            id="fecha_nacimiento" 
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="correo">Correo:</label><br />
          <input 
            className="CorreoEmpleado" 
            type="email" 
            id="correo" 
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="telefono">Teléfono:</label><br />
          <input 
            className="TelefonoEmpleado" 
            type="tel" 
            id="telefono" 
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Contraseña:</label><br />
          <input 
            className="PasswordEmpleado" 
            type="password" 
            id="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmar_password">Confirmar Contraseña:</label><br />
          <input 
            className="ConfirmarPasswordEmpleado" 
            type="password" 
            id="confirmar_password" 
            name="confirmar_password"
            value={formData.confirmar_password}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button 
          className="BotonRegistrar" 
          type="submit" 
          disabled={loading}
          style={{ padding: '10px 20px', marginRight: '10px' }}
        >
          {loading ? 'Registrando...' : 'Registrar Empleado'}
        </button>
        
        <button 
          className="BotonVolverAlLogin" 
          type="button" 
          onClick={handleVolver}
          style={{ padding: '10px 20px' }}
        >
          Volver
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <span>¿Ya tienes cuenta? </span>
        <Link to="/Login">Iniciar sesión</Link>
      </div>
    </div>
  );
}

export default Empleados;

