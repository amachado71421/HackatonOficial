import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/fech.js';

function Institution() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    cedula_juridica: '',
    nombre_responsable: '',
    telefono: '',
    correo: '',
    direccion: '',
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
      const response = await api.post('/instituciones/', {
        nombre: formData.nombre,
        tipo: formData.tipo,
        cedula_juridica: formData.cedula_juridica,
        nombre_responsable: formData.nombre_responsable,
        telefono: formData.telefono,
        correo: formData.correo,
        direccion: formData.direccion,
        password: formData.password
      });

      if (response.status === 201) {
        alert('Institución registrada exitosamente. Ahora puedes iniciar sesión.');
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
        setError('Error al registrar la institución. Inténtalo de nuevo.');
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
      <h4>Formulario de Instituciones Educativas</h4>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nombre">Nombre de la Institución:</label><br />
          <input 
            className="NombreInstitucion" 
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
          <label htmlFor="tipo">Tipo de Institución:</label><br />
          <select 
            className="TipoInstitucion" 
            id="tipo" 
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Seleccionar tipo</option>
            <option value="Colegio">Colegio</option>
            <option value="Universidad">Universidad</option>
            <option value="Técnico">Técnico</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cedula_juridica">Cédula Jurídica:</label><br />
          <input 
            className="CedulaJuridicaInstitucion" 
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
          <label htmlFor="nombre_responsable">Nombre del contacto responsable:</label><br />
          <input 
            className="NombreResponsableInstitucion" 
            type="text" 
            id="nombre_responsable" 
            name="nombre_responsable"
            value={formData.nombre_responsable}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="telefono">Teléfono de contacto:</label><br />
          <input 
            className="TelefonoInstitucion" 
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
          <label htmlFor="correo">Correo institucional:</label><br />
          <input 
            className="CorreoInstitucion" 
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
          <label htmlFor="direccion">Dirección (Provincia/Cantón):</label><br />
          <input 
            className="DireccionInstitucion" 
            type="text" 
            id="direccion" 
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Contraseña:</label><br />
          <input 
            className="PasswordInstitucion" 
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
            className="ConfirmarPasswordInstitucion" 
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
          {loading ? 'Registrando...' : 'Registrar Institución'}
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

export default Institution;

