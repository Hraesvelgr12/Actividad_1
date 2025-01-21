import logo from "/logo.jpeg";
import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";
import { Login } from "../Pages/Login";

export function Encabezado() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo_CineMagico" className="header__logo" />
      </Link>
      <div className="Card">
        <div className="container">
          <div className="InputContainer">
            <input placeholder="Buscar" />
          </div>
        </div>
      </div>

      <div className="header__title">
        <Link to="/">
          <h1 className="header__title"> CineMágico</h1>
        </Link>
        <i className="header__title--slogan">
          Tus películas al alcance de un clic
        </i>
      </div>

      <LoginHeader />
    </header>
  );
}
