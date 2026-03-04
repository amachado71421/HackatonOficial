import React from "react";

const MenuEmpleado = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/admin/panel-general">Panel General</a>
        </li>
        <li>
          <a href="/admin/administrar-empleados">Administrar Empleados</a>
        </li>
        <li>
          <a href="/admin/administrar-pasantes">Administrar Pasantes</a>
        </li>
        <li>
          <a href="/admin/administrar-institutos">Administrar Institutos</a>
        </li>
        <li>
          <a href="/admin/administrar-empresas">Administrar Empresas</a>
        </li>
        <li>
          <a href="/admin/vacantes">Vacantes</a>
        </li>
        <li>
          <a href="/admin/reportes">Reportes</a>
        </li>
        <li>
          <a href="/admin/configuraciones">Configuraciones</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuEmpleado;