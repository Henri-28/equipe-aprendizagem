import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Home() {
  return (
    <div className="page">
      <div style={{ marginBottom: "24px" }}>
        <p className="secondary-text">Olá, estudante!</p>

        <h1 className="page-title">
          O que você quer aprender hoje?
        </h1>
      </div>

      <Card>
        <p className="secondary-text">
          Próximo passo
        </p>

        <h2 className="section-title">
          Começar seus estudos
        </h2>

        <p className="body-text">
          Continue seu aprendizado de onde parou.
        </p>

        <div style={{ marginTop: "16px" }}>
          <Button>Começar</Button>
        </div>
      </Card>

      <div style={{ marginTop: "16px" }}>
        <Card>
          <p className="secondary-text">
            Seu progresso
          </p>

          <h2 className="section-title">
            0%
          </h2>

          <div style={{ marginTop: "12px" }}>
            <ProgressBar value={0} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;