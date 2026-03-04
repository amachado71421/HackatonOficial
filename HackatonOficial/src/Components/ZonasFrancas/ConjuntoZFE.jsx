import React, { useState, useEffect } from "react";
import ZonaFranca from "./ZonaFranca";
import api from "../../services/fech";

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

const imagenesLocales = {
  "La Lima Free Zone": laLimaImg,
  "Coyol Free Zone": CoyolImg,
  "Ultrapark": UltraPark,
  "Intel Free Trade Zone Park": IntelPark,
  "FTZ Coca Cola Park": CocaColaPark,
  "Europlaza Diursa": EuroplazaDiursa,
  "Zona Franca Metropolitana": Metropolitana,
  "Zona Franca Puntarenas": ZFPuntarenas,
  "Parque Industrial Zona Franca Alajuela": ZFAlajuela,
  "Almacenes Atalanta": ZFAtlanta,
};

const ConjuntoZFE = ({ filtroBusqueda }) => {
  const [zonas, setZonas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchZonas = async () => {
      try {
        const response = await api.get('/zonas-francas/');
        setZonas(response.data);
        setCargando(false);
      } catch (err) {
        console.error("Error fetching zonas francas:", err);
        setError("Error al cargar las zonas francas");
        setCargando(false);
      }
    };

    fetchZonas();
  }, []);

  // Obtener imagen local o usar una por defecto
  const getImagen = (nombre) => {
    return imagenesLocales[nombre] || laLimaImg;
  };

  // Preparar datos combinando API con imágenes locales
  const listadoZonas = zonas.map(zona => ({
    id: zona.id,
    nombre: zona.nombre,
    ciudad: zona.ciudad,
    pais: zona.pais,
    imagen: getImagen(zona.nombre),
    categorias: zona.categorias || [],
  }));

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

  if (cargando) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p>Cargando zonas francas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "red" }}>
        <p>{error}</p>
      </div>
    );
  }

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
