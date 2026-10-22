import { Link } from "react-router-dom";
import "./AppHeader.css";

function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <Link to="/" className="app-header__brand">
          <span className="app-header__brand-mark">A</span>

          <span className="app-header__brand-name">
            Aplicação
          </span>
        </Link>

        <button
          type="button"
          className="app-header__profile"
          aria-label="Abrir perfil"
        >
          <span className="app-header__profile-avatar">
            U
          </span>
        </button>
      </div>
    </header>
  );
}

export default AppHeader;