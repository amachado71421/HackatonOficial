import React from 'react'

function Institution() {
  return (
    <div>
        <h4>Formulario de Instituciones Educativas</h4>
        <label htmlFor="nombre">Nombre de la Institución:</label>
        <input className="NombreInstitucion" type="text" id="NombreInstitucion" name="NombreInstitucion" />
        <br />
        <label htmlFor="select">Tipo de Institución:</label>
        <select className="TipoInstitucion" id="TipoInstitucion" name="TipoInstitucion">
          <option value="">Seleccionar tipo</option>
          <option value="Colegio">Colegio</option>
          <option value="Universidad">Universidad</option>
          <option value="Técnico">Técnico</option>
        </select>
        <br />
        <label htmlFor="nit">Cédula Jurídica:</label>
        <input className="CedulaJuridicaInstitucion" type="number" id="CedulaJuridicaInstitucion" name="CedulaJuridicaInstitucion" />
        <br />
        <label htmlFor="nombre">Nombre del contacto responsable:</label>
        <input className="NombreResponsableInstitucion" type="text" id="NombreResponsableInstitucion" name="NombreResponsableInstitucion" />
        <br />
        <label htmlFor="telefono">Teléfono de contacto:</label>
        <input className="TelefonoInstitucion" type="tel" id="TelefonoInstitucion" name="TelefonoInstitucion" />
        <br />
        <label htmlFor="correo">Correo institucional:</label>
        <input className="CorreoInstitucion" type="email" id="CorreoInstitucion" name="CorreoInstitucion" />
        <br />
        <label htmlFor="direccion">Dirección (Provincia/Cantón):</label>
        <input className="DireccionInstitucion" type="text" id="DireccionInstitucion" name="DireccionInstitucion" />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input className="PasswordInstitucion" type="password" id="PasswordInstitucion" name="PasswordInstitucion" />
        <br />
        <label htmlFor="confirmarcontraseña">Confirmar Contraseña:</label>
        <input className="ConfirmarPasswordInstitucion" type="password" id="ConfirmarPasswordInstitucion" name="ConfirmarPasswordInstitucion" />
        <br />
        <button className="BotonRegistrar" type="submit">Registrar Institución</button>
        <button className="BotonVolverAlLogin" type="button">Volver</button>
    </div>
  )
}

export default Institution