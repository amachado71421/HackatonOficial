import React from "react";
import ZonaFranca from "./ZonaFranca";

const ConjuntoZFE = () => {
  const listadoZonas = [
     {
    id: 1,
    nombre: "La Lima Free Zone",
    ciudad: "Cartago",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?industrial-park",
    categorias: ["Manufactura Avanzada", "Dispositivos Médicos", "Servicios Corporativos"],
  },
  {
    id: 2,
    nombre: "Coyol Free Zone",
    ciudad: "Alajuela",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?medical-industry",
    categorias: ["Dispositivos Médicos", "Exportación", "Industria"],
  },
  {
    id: 3,
    nombre: "Ultrapark",
    ciudad: "Heredia",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?technology-park",
    categorias: ["Servicios Corporativos", "Tecnología", "IT"],
  },
  {
    id: 4,
    nombre: "Intel Free Trade Zone Park",
    ciudad: "Heredia",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?microchip",
    categorias: ["Tecnología", "Semiconductores", "Manufactura Electrónica"],
  },
  {
    id: 5,
    nombre: "FTZ Coca Cola Park",
    ciudad: "Alajuela",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?logistics-center",
    categorias: ["Industria", "Logística", "Distribución"],
  },
  {
    id: 6,
    nombre: "Europlaza Diursa",
    ciudad: "Heredia",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?business-park",
    categorias: ["Manufactura", "Servicios", "Empresarial"],
  },
  {
    id: 7,
    nombre: "Zona Franca Metropolitana",
    ciudad: "Heredia",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?industrial-complex",
    categorias: ["Industria", "Empresarial", "Manufactura"],
  },
  {
    id: 8,
    nombre: "Zona Franca Puntarenas",
    ciudad: "Puntarenas",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?port-industrial",
    categorias: ["Logística", "Industria", "Exportación"],
  },
  {
    id: 9,
    nombre: "Parque Industrial Zona Franca Alajuela",
    ciudad: "Alajuela",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?factory",
    categorias: ["Industria", "Manufactura", "Empresarial"],
  },
  {
    id: 10,
    nombre: "Almacenes Atalanta",
    ciudad: "San José",
    pais: "Costa Rica",
    imagen: "https://source.unsplash.com/800x600/?warehouse-logistics",
    categorias: ["Logística", "Almacenamiento", "Distribución"],
  },
  ];

  return (
    <div
      className="czfe-wrapper-general"
      id="czfe-wrapper-id"
      name="czfe-wrapper-name"
    >
      {listadoZonas.map((zona) => (
        <ZonaFranca key={zona.id} datosZona={zona} />
      ))}
    </div>
  );
};

export default ConjuntoZFE;