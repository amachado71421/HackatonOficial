import React from "react";
import ZonaFranca from "./ZonaFranca";

import laLimaImg from "../../Images/ZonasFrancas/LaLima.png";
import CoyolImg from "../../Images/ZonasFrancas/CoyolImg.jpg";
import UltraPark from "../../Images/ZonasFrancas/UltraPark.png";
import IntelPark from "../../Images/ZonasFrancas/IntelPark.png";
import CocaColaPark from "../../Images/ZonasFrancas/CocaColaPark.png";
import EuroplazaDiursa from "../../Images/ZonasFrancas/EuroplazaDiursa.jpg";
import Metropolitana from "../../Images/ZonasFrancas/Metropolitana.jpg";
import ZFPuntarenas from "../../Images/ZonasFrancas/ZFPuntarenas.png";
import ZFAlajuela from "../../Images/ZonasFrancas/ZFAlajuela.jpg";
import ZFAtlanta from "../../Images/ZonasFrancas/ZFAtlanta.jpg";

const ConjuntoZFE = ({ filtroBusqueda }) => {

  const listadoZonas = [
    {
      id: 1,
      nombre: "La Lima Free Zone",
      ciudad: "Cartago",
      pais: "Costa Rica",
      imagen: laLimaImg,
      categorias: ["Manufactura Avanzada", "Dispositivos Médicos", "Servicios Corporativos"],
    },
    {
      id: 2,
      nombre: "Coyol Free Zone",
      ciudad: "Alajuela",
      pais: "Costa Rica",
      imagen: CoyolImg,
      categorias: ["Dispositivos Médicos", "Exportación", "Industria"],
    },
    {
      id: 3,
      nombre: "Ultrapark",
      ciudad: "Heredia",
      pais: "Costa Rica",
      imagen: UltraPark,
      categorias: ["Servicios Corporativos", "Tecnología", "IT"],
    },
    {
      id: 4,
      nombre: "Intel Free Trade Zone Park",
      ciudad: "Heredia",
      pais: "Costa Rica",
      imagen: IntelPark,
      categorias: ["Tecnología", "Semiconductores", "Manufactura Electrónica"],
    },
    {
      id: 5,
      nombre: "FTZ Coca Cola Park",
      ciudad: "Alajuela",
      pais: "Costa Rica",
      imagen: CocaColaPark,
      categorias: ["Industria", "Logística", "Distribución"],
    },
    {
      id: 6,
      nombre: "Europlaza Diursa",
      ciudad: "Heredia",
      pais: "Costa Rica",
      imagen: EuroplazaDiursa,
      categorias: ["Manufactura", "Servicios", "Empresarial"],
    },
    {
      id: 7,
      nombre: "Zona Franca Metropolitana",
      ciudad: "Heredia",
      pais: "Costa Rica",
      imagen: Metropolitana,
      categorias: ["Industria", "Empresarial", "Manufactura"],
    },
    {
      id: 8,
      nombre: "Zona Franca Puntarenas",
      ciudad: "Puntarenas",
      pais: "Costa Rica",
      imagen: ZFPuntarenas,
      categorias: ["Logística", "Industria", "Exportación"],
    },
    {
      id: 9,
      nombre: "Parque Industrial Zona Franca Alajuela",
      ciudad: "Alajuela",
      pais: "Costa Rica",
      imagen: ZFAlajuela,
      categorias: ["Industria", "Manufactura", "Empresarial"],
    },
    {
      id: 10,
      nombre: "Almacenes Atalanta",
      ciudad: "San José",
      pais: "Costa Rica",
      imagen: ZFAtlanta,
      categorias: ["Logística", "Almacenamiento", "Distribución"],
    },
  ];

  // 🔎 FILTRO FUNCIONAL
  const zonasFiltradas = listadoZonas.filter((zona) => {
    const texto = filtroBusqueda?.toLowerCase() || "";

    return (
      zona.nombre.toLowerCase().includes(texto) ||
      zona.ciudad.toLowerCase().includes(texto) ||
      zona.categorias.some((categoria) =>
        categoria.toLowerCase().includes(texto)
      )
    );
  });

  return (
    <div
      className="czfe-wrapper-general"
      id="czfe-wrapper-id"
      name="czfe-wrapper-name"
    >
      {zonasFiltradas.length > 0 ? (
        zonasFiltradas.map((zona) => (
          <ZonaFranca key={zona.id} datosZona={zona} />
        ))
      ) : (
        <p style={{ textAlign: "center", padding: "40px", fontSize: "1.1rem" }}>
          No se encontraron zonas francas.
        </p>
      )}
    </div>
  );
};

export default ConjuntoZFE;