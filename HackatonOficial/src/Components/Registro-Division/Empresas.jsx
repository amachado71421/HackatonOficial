import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/fech.js';

function Empresas() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre_empresa: '',
    cedula_juridica: '',
    nombre_representante: '',
    telefono: '',
    correo: '',
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
      const response = await api.post('/empresas/', {
        nombre_empresa: formData.nombre_empresa,
        cedula_juridica: formData.cedula_juridica,
        nombre_representante: formData.nombre_representante,
        telefono: formData.telefono,
        correo: formData.correo,
        password: formData.password
      });

      if (response.status === 201) {
        alert('Empresa registrada exitosamente. Ahora puedes iniciar sesión.');
        navigate('/Login');
      }
    } catch (err) {
      console.error('Error en el registro:', err);
      if (err.response?.data) {
        // Format error messages
        const errorMessages = Object.entries(err.response.data)
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ');
        setError(errorMessages);
      } else {
        setError('Error al registrar la empresa. Inténtalo de nuevo.');
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
      <h4>Formulario de Empresas</h4>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nombre_empresa">Nombre de la Empresa:</label><br />
          <input 
            className="NombreEmpresa" 
            type="text" 
            id="nombre_empresa" 
            name="nombre_empresa"
            value={formData.nombre_empresa}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cedula_juridica">Cédula Jurídica:</label><br />
          <input 
            className="CedulaJuridicaEmpresa" 
            type="text" 
            id="cedula_juridica" 
            name="cedula_juridica"
            value={formData.cedula_juridica}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nombre_representante">Nombre de representante legal:</label><br />
          <input 
            className="NombreRepresentanteEmpresa" 
            type="text" 
            id="nombre_representante" 
            name="nombre_representante"
            value={formData.nombre_representante}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="telefono">Teléfono de contacto:</label><br />
          <input 
            className="TelefonoEmpresa" 
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
          <label htmlFor="correo">Correo empresarial:</label><br />
          <input 
            className="CorreoEmpresa" 
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
          <label htmlFor="password">Contraseña:</label><br />
          <input 
            className="PasswordEmpresa" 
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
            className="ConfirmarPasswordEmpresa" 
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
          {loading ? 'Registrando...' : 'Registrar Empresa'}
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

export default Empresas;

