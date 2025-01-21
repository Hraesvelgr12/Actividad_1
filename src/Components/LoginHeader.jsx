import { Link } from "react-router-dom";

export function LoginHeader() {
  return (
    <Link to="/login">
      <div className="header__login">
        <img src="./login.svg" className="header__login--icon" />
        <p> Iniciar sesión </p>
      </div>
    </Link>
  );
}
