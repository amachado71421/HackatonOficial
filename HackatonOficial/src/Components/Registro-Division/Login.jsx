import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import api from "../../services/fech.js";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/Login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      navigate("/");
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">

        {/* Panel Izquierdo */}
        <div className="login-left">
          <span className="login-brand">Zona Franca Empleos</span>

          <h1 className="login-title">
            Inicia sesión<br />en tu cuenta
          </h1>

          {error && <p className="login-error">{error}</p>}

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-button">
              INICIAR SESIÓN
            </button>
          </form>

          <p className="login-footer">
            ¿No tienes cuenta?{" "}
            <Link to="/seleccion-usuarios" className="login-link">
              Regístrate
            </Link>
          </p>
        </div>

        {/* Panel Derecho */}
        <div className="login-right">
          <div className="image-overlay-card top-card">
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;