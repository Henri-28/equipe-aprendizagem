import AppHeader from "../../components/AppHeader/AppHeader";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import "./Placeholder.css";

function Placeholder({ title }) {
  return (
    <div className="placeholder-page">
      <AppHeader />

      <main className="placeholder-page__main">
        <span className="placeholder-page__eyebrow">
          Área da aplicação
        </span>

        <h1>{title}</h1>

        <p>
          Esta tela foi criada como estrutura inicial
          e será desenvolvida nas próximas etapas do projeto.
        </p>
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Placeholder;