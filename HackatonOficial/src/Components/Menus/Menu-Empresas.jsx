import React from "react";

const MenuEmpresas = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/empresas/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/empresas/publicar-vacantes">Publicar Vacantes</a>
        </li>
        <li>
          <a href="/empresas/mis-vacantes">Mis Vacantes</a>
        </li>
        <li>
          <a href="/empresas/candidatos">Candidatos</a>
        </li>
        <li>
          <a href="/empresas/perfil-empresa">Perfil Empresa</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuEmpresas;