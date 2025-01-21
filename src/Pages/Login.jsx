import { Encabezado } from "../Components/Encabezado.jsx";
import { useState } from "react";
import "./login.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAccept = (e) => {
    e.preventDefault();

    if (
      (username === "usuario" && password === "contraseña") ||
      (username === "admin" && password === "admin")
    ) {
      alert("Bienvenido");
      window.location.href = "/";
    } else {
      setError("Credenciales inválidas, verifique de nuevo");
    }
  };

  return (
    <>
      <Encabezado />

      <div className="login">
        <h2 className="login__title">Iniciar Sesión</h2>
        <form className="login__form" id="loginForm" onSubmit={handleAccept}>
          <div className="login__input-group">
            <label className="login__label" htmlFor="username">
              Usuario:
            </label>
            <input
              className="login__input"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login__input-group">
            <label className="login__label" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="login__input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login__button" type="submit">
            Iniciar Sesión
          </button>
        </form>
        {error && <p className="login__error">{error}</p>}{" "}
      </div>
    </>
  );
}
