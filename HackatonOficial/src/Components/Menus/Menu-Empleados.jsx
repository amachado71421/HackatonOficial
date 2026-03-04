import React from "react";

const MenuEmpleado = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/empleado/inicio">Inicio</a>
        </li>
        <li>
          <a href="/empleado/postulaciones">Mis Postulaciones</a>
        </li>
        <li>
          <a href="/empleado/empleos">Buscar Empleos</a>
        </li>
        <li>
          <a href="/empleado/perfil">Perfil</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuEmpleado;