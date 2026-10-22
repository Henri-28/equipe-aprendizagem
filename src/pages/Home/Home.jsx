import AppHeader from "../../components/AppHeader/AppHeader";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <AppHeader />

      <main className="home-page__main">
        <section className="home-page__intro">
          <span className="home-page__eyebrow">
            Área principal
          </span>

          <h1 className="home-page__title">
            Bem-vindo à aplicação
          </h1>

          <p className="home-page__description">
            Este espaço será utilizado para apresentar
            as principais informações e funcionalidades
            disponíveis para o usuário.
          </p>
        </section>

        <section className="home-page__section">
          <div className="home-page__section-heading">
            <div>
              <span className="home-page__section-eyebrow">
                Visão geral
              </span>

              <h2 className="home-page__section-title">
                Acesso rápido
              </h2>
            </div>
          </div>

          <div className="home-page__cards">
            <article className="home-card">
              <div className="home-card__icon">
                +
              </div>

              <div className="home-card__content">
                <h3>Novo recurso</h3>

                <p>
                  Área preparada para uma funcionalidade
                  da aplicação.
                </p>
              </div>
            </article>

            <article className="home-card">
              <div className="home-card__icon">
                ✓
              </div>

              <div className="home-card__content">
                <h3>Atividade</h3>

                <p>
                  Área preparada para informações
                  relevantes do usuário.
                </p>
              </div>
            </article>

            <article className="home-card">
              <div className="home-card__icon">
                i
              </div>

              <div className="home-card__content">
                <h3>Informações</h3>

                <p>
                  Área preparada para conteúdos
                  complementares.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="home-page__highlight">
          <div className="home-page__highlight-content">
            <span className="home-page__highlight-label">
              Próximas funcionalidades
            </span>

            <h2>
              Esta estrutura será expandida nas próximas
              Sprints.
            </h2>

            <p>
              Os componentes visuais foram organizados
              para facilitar a integração das funcionalidades
              reais posteriormente.
            </p>
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Home;