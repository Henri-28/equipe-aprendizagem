import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Login() {
  return (
    <div className="page">
      <div style={{ maxWidth: "420px", margin: "40px auto" }}>
        <p className="secondary-text">
          Bem-vindo de volta
        </p>

        <h1 className="page-title">
          Entrar
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "32px",
          }}
        >
          <Input
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
          />

          <Button type="submit">
            Entrar
          </Button>

          <Button variant="ghost">
            Esqueci minha senha
          </Button>

          <Button variant="secondary">
            Criar conta
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;