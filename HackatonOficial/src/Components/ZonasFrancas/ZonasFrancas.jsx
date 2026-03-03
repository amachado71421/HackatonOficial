import React from "react";
import "../../styles/ZonaFranca/ZonasFrancas.css";
import ConjuntoZFE from "./ConjuntoZFE.jsx";
import BarraNav from "../BarraNav.jsx";

const ZonasFrancas = () => {
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
          <input
            type="text"
            placeholder="Search industrial zones..."
            className="zfs-search-input"
            name="zfs-search-field"
            id="zfs-search-id"
          />
        </section>

        <section className="zfs-content-scroll">
          <ConjuntoZFE />
        </section>
      </div>
    </>
  );
};

export default ZonasFrancas;