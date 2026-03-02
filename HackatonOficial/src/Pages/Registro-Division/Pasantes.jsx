import React from 'react'

function Pasantes() {
  return (
    <div>
        <h4>Formulario de Pasantes</h4>
        <label htmlFor="nombre">Nombre completo:</label>
        <input className="NombrePasante" type="text" id="NombrePasante" name="NombrePasante" />
        <br />
        <label htmlFor="number">Número de Cédula o identificación estudiantil:</label>
        <input className="NumeroIdentificacionPasante" type="number" id="NumeroIdentificacionPasante" name="NumeroIdentificacionPasante" />
        <br />
        <label htmlFor="fecha">Fecha de nacimiento:</label>
        <input className="FechaNacimientoPasante" type="date" id="FechaNacimientoPasante" name="FechaNacimientoPasante" />
        <br />
        <label htmlFor="correo">Correo electrónico:</label>
        <input className="CorreoPasante" type="email" id="CorreoPasante" name="CorreoPasante" />
        <br />
        <label htmlFor="telefono">Teléfono:</label>
        <input className="TelefonoPasante" type="tel" id="TelefonoPasante" name="TelefonoPasante" />
        <br />
        <label htmlFor="nombre">Institución educativa:</label>
        <input className="InstitucionEducativaPasante" type="text" id="InstitucionEducativaPasante" name="InstitucionEducativaPasante" />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input className="PasswordPasante" type="password" id="PasswordPasante" name="PasswordPasante" />
        <br />
        <label htmlFor="confirmarcontraseña">Confirmar Contraseña:</label>
        <input className="ConfirmarPasswordPasante" type="password" id="ConfirmarPasswordPasante" name="ConfirmarPasswordPasante" />
        <br />
        <button className="BotonRegistrar" type="submit">Registrar Pasante</button>
        <button className="BotonVolverAlLogin" type="button">Volver</button>
    </div>
  )
}

export default Pasantes