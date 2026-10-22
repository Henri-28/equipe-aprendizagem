import { NavLink } from "react-router-dom";
import "./BottomNavigation.css";

function BottomNavigation() {
  return (
    <nav className="bottom-navigation" aria-label="Navegação principal">
      <div className="bottom-navigation__content">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">⌂</span>
          <span className="bottom-navigation__label">Início</span>
        </NavLink>

        <NavLink
          to="/explorar"
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">⌕</span>
          <span className="bottom-navigation__label">Explorar</span>
        </NavLink>

        <NavLink
          to="/atividade"
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">♡</span>
          <span className="bottom-navigation__label">Atividade</span>
        </NavLink>

        <NavLink
          to="/perfil"
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">○</span>
          <span className="bottom-navigation__label">Perfil</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default BottomNavigation;