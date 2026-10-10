

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";
import AuthInput from "../../components/AuthInput/AuthInput";
import Button from "../../components/Button/Button";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Digite seu e-mail.";
    }

    if (!password.trim()) {
      newErrors.password = "Digite sua senha.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      navigate("/");
    }, 800);
  }

  return (
    <AuthLayout>
      <section className="login">
        <header className="auth-header">
          <span className="auth-header__eyebrow">
            BEM-VINDO
          </span>

          <h1>Entre para continuar</h1>

          <p>
            Acesse sua conta e continue seu aprendizado.
          </p>
        </header>

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
            error={errors.email}
            disabled={isLoading}
          />

          <div className="password-field">
            <AuthInput
              id="password"
              label="Senha"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Digite sua senha"
              error={errors.password}
              disabled={isLoading}
            />
          </div>

          <div className="auth-form__forgot">
            <Link to="/forgot-password">
              Esqueci minha senha
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="auth-divider">
          <span>ou</span>
        </div>

        <div className="auth-register">
          <span>
            Ainda não possui uma conta?
          </span>

          <Link to="/register">
            Criar conta
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
}

export default Login;