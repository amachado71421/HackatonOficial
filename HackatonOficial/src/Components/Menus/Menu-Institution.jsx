import React from "react";

const MenuInstitution = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/institution/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/institution/estudiantes">Estudiantes</a>
        </li>
        <li>
          <a href="/institution/empresas-vinculadas">Empresas Vinculadas</a>
        </li>
        <li>
          <a href="/institution/convenios">Convenios</a>
        </li>
        <li>
          <a href="/institution/seguimiento-practicas">Seguimiento de Prácticas</a>
        </li>
        <li>
          <a href="/institution/perfil-instituto">Perfil Instituto</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuInstitution;