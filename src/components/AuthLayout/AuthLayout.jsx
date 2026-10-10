import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <main className="auth-layout">
      <div className="auth-layout__container">
        <div className="auth-layout__brand">
          <div className="auth-layout__logo">
            A
          </div>

          <span className="auth-layout__brand-name">
            Aprendizado
          </span>
        </div>

        <div className="auth-layout__content">
          {children}
        </div>

        <p className="auth-layout__footer">
          Aprenda com mais clareza.
        </p>
      </div>
    </main>
  );
}

export default AuthLayout;