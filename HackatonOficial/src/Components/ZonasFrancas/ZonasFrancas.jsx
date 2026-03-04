import React, { useState } from "react";
import ConjuntoZFE from "./ConjuntoZFE.jsx";
import BarraNav from "../BarraNav.jsx";
import '../../styles/ZonaFranca/ZonasFrancas.css';
const ZonasFrancas = () => {

  // Estado del input (lo que escribes)
  const [input, setInput] = useState("");

  // Estado de búsqueda aplicada (lo que realmente filtra)
  const [busqueda, setBusqueda] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    setBusqueda(input); // Solo aquí se ejecuta la búsqueda
  };

  const limpiarBusqueda = () => {
    setInput("");
    setBusqueda("");
  };

  return (
    <>
      <BarraNav />

      <div
        className="zfs-main-layout"
        id="zfs-main-id"
        name="zfs-main-name"
      >
        <header className="zfs-header-bar">
          <h2 className="zfs-header-title">
            Zonas Francas
          </h2>
        </header>

        <section className="zfs-search-area">
          <form onSubmit={manejarSubmit} className="zfs-search-form">

            <input
              type="search"
              placeholder="Buscar Zona Franca..."
              className="zfs-search-input"
              name="zfs-search-field"
              id="zfs-search-id"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" className="zfs-search-button">
              Buscar
            </button>

            <button
              type="button"
              onClick={limpiarBusqueda}
              className="zfs-clear-button"
            >
              Limpiar
            </button>

          </form>
        </section>

        <section className="zfs-content-scroll">
          <ConjuntoZFE filtroBusqueda={busqueda} />
        </section>
      </div>
    </>
  );
};

export default ZonasFrancas;