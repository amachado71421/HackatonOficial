import React from 'react'

function Empresas() {
  return (
    <div>
        <h4>Formulario de Empresas</h4>
        <label htmlFor="nombre">Nombre de la Empresa:</label>
        <input className="NombreEmpresa" type="text" id="NombreEmpresa" name="NombreEmpresa" />
        <br />
        <label htmlFor="nit">Cédula Jurídica:</label>
        <input className="CedulaJuridicaEmpresa" type="number" id="CedulaJuridicaEmpresa" name="CedulaJuridicaEmpresa" />
        <br />
        <label htmlFor="nombre">Nombre de representante legal:</label>
        <input className="NombreRepresentanteEmpresa" type="text" id="NombreRepresentanteEmpresa" name="NombreRepresentanteEmpresa" />
        <br />
        <label htmlFor="telefono">Teléfono de contacto:</label>
        <input className="TelefonoEmpresa" type="tel" id="TelefonoEmpresa" name="TelefonoEmpresa" />
        <br />
        <label htmlFor="correo">Correo empresarial:</label>
        <input className="CorreoEmpresa" type="email" id="CorreoEmpresa" name="CorreoEmpresa" />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input className="PasswordEmpresa" type="password" id="PasswordEmpresa" name="PasswordEmpresa" />
        <br />
        <label htmlFor="confirmarcontraseña">Confirmar Contraseña:</label>
        <input className="ConfirmarPasswordEmpresa" type="password" id="ConfirmarPasswordEmpresa" name="ConfirmarPasswordEmpresa" />
        <br />
        <button className="BotonRegistrar" type="submit">Registrar Empresa</button>
        <button className="BotonVolverAlLogin" type="button">Volver</button>
    </div>
  )
}

export default Empresas