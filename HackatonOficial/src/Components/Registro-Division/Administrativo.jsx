import React from 'react'

function Administrativo() {
  return (
    <div>
        <h4>Formulario de Administrativo</h4>
        <label htmlFor="nombre">Nombre completo:</label>
        <input className="NombreAdministrativo" type="text" id="NombreAdministrativo" name="NombreAdministrativo" />
        <br />
        <label htmlFor="identificacion">Número de Identificación:</label>
        <input className="IdentificacionAdministrativo" type="number" id="IdentificacionAdministrativo" name="IdentificacionAdministrativo" />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input className="PasswordAdministrativo" type="password" id="PasswordAdministrativo" name="PasswordAdministrativo" />
        <br />
        <label htmlFor="confirmarcontraseña">Confirmar Contraseña:</label>
        <input className="ConfirmarPasswordAdministrativo" type="password" id="ConfirmarPasswordAdministrativo" name="ConfirmarPasswordAdministrativo" />
        <br />
        <button className="BotonRegistrar" type="submit">Registrar Administrativo</button>
        <button className="BotonVolverAlLogin" type="button">Volver</button>
    </div>
  )
}

export default Administrativo