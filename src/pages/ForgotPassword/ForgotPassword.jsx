import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";
import AuthInput from "../../components/AuthInput/AuthInput";
import Button from "../../components/Button/Button";

import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setError("Digite seu e-mail.");
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSent(true);
    }, 800);
  }

  return (
    <AuthLayout>
      <section className="forgot-password">
        <header className="auth-header">
          <span className="auth-header__eyebrow">
            RECUPERAÇÃO
          </span>

          <h1>Recupere sua senha</h1>

          <p>
            Informe seu e-mail para receber as instruções
            de recuperação.
          </p>
        </header>

        {!sent ? (
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >
            <AuthInput
              id="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="seu@email.com"
              error={error}
              disabled={isLoading}
            />

            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? "Enviando..."
                : "Enviar instruções"}
            </Button>
          </form>
        ) : (
          <div className="forgot-password__success">
            <div className="forgot-password__icon">
              ✓
            </div>

            <h2>
              Verifique seu e-mail
            </h2>

            <p>
              Se existir uma conta associada a este
              endereço, você receberá as instruções
              de recuperação.
            </p>
          </div>
        )}

        <div className="forgot-password__back">
          <Link to="/login">
            ← Voltar para o login
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
}

export default ForgotPassword;