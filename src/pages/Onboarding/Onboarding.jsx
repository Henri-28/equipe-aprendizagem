import Button from "../../components/Button/Button";

function Onboarding() {
  return (
    <div className="page">
      <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
        <h1 className="page-title">
          Aprenda com mais clareza.
        </h1>

        <p className="body-text" style={{ marginTop: "16px" }}>
          Organize seus estudos e saiba qual é o próximo passo.
        </p>

        <div style={{ marginTop: "32px" }}>
          <Button>Começar</Button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;