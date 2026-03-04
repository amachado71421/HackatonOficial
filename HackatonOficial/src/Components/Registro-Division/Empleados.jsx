import React from 'react'

function Empleados() {
  return (
    <div>
        <h4>Formulario</h4>
        <label htmlFor="nombre">Nombre:</label>
        <input className="NombreEmpleado" type="text" id="NombreEmpleado" name="NombreEmpleado" />
        <br />
        <label htmlFor="apellidos">Apellidos:</label>
        <input className="ApellidosEmpleado" type="text" id="ApellidosEmpleado" name="ApellidosEmpleado" />
        <br />
        <label htmlFor="number">Número de Cédula:</label>
        <input className="CedulaEmpleado" type="number" id="CedulaEmpleado" name="CedulaEmpleado" />
        <br />
        <label htmlFor="fecha">Fecha de Nacimiento:</label>
        <input className="FechaEmpleado" type="date" id="FechaEmpleado" name="FechaEmpleado" />
        <br />
        <label htmlFor="correo">Correo:</label>
        <input className="CorreoEmpleado" type="email" id="CorreoEmpleado" name="CorreoEmpleado" />
        <br />
        <label htmlFor="telefono">Teléfono:</label>
        <input className="TelefonoEmpleado" type="tel" id="TelefonoEmpleado" name="TelefonoEmpleado" />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input className="PasswordEmpleado" type="password" id="PasswordEmpleado" name="PasswordEmpleado" />
        <br />
        <label htmlFor="confirmarcontraseña">Confirmar Contraseña:</label>
        <input className="ConfirmarPasswordEmpleado" type="password" id="ConfirmarPasswordEmpleado" name="ConfirmarPasswordEmpleado" />
        <br />
        <button className="BotonRegistrar" type="submit">Registrar Empleado</button>
        <button className="BotonVolverAlLogin" type="button">Volver</button>
    </div>
  )
}

export default Empleados