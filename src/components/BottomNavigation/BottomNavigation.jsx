import { NavLink } from "react-router-dom";
import "./BottomNavigation.css";

const navigationItems = [
  {
    label: "Início",
    path: "/home",
    icon: "⌂",
  },
  {
    label: "Estudar",
    path: "/study",
    icon: "▣",
  },
  {
    label: "Planejamento",
    path: "/planning",
    icon: "✓",
  },
  {
    label: "Progresso",
    path: "/progress",
    icon: "↗",
  },
  {
    label: "Perfil",
    path: "/profile",
    icon: "●",
  },
];

function BottomNavigation() {
  return (
    <nav className="bottom-navigation">
      {navigationItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "navigation-item active"
              : "navigation-item"
          }
        >
          <span className="navigation-icon">
            {item.icon}
          </span>

          <span className="navigation-label">
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNavigation;