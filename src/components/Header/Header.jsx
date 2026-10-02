import "./Header.css";

function Header({ title = "Aprender" }) {
  return (
    <header className="header">
      <div>
        <span className="header-brand">Aprender</span>
        <h1 className="header-title">{title}</h1>
      </div>

      <button className="header-avatar" aria-label="Abrir perfil">
        U
      </button>
    </header>
  );
}

export default Header;