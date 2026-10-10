import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";
import AuthInput from "../../components/AuthInput/AuthInput";
import Button from "../../components/Button/Button";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Digite seu nome.";
    }

    if (!email.trim()) {
      newErrors.email = "Digite seu e-mail.";
    }

    if (!password.trim()) {
      newErrors.password = "Digite uma senha.";
    } else if (password.length < 6) {
      newErrors.password =
        "A senha deve possuir pelo menos 6 caracteres.";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword =
        "Confirme sua senha.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "As senhas não são iguais.";
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
      <section className="register">
        <header className="auth-header">
          <span className="auth-header__eyebrow">
            COMEÇAR
          </span>

          <h1>Crie sua conta</h1>

          <p>
            Configure sua conta para começar seu aprendizado.
          </p>
        </header>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >
          <AuthInput
            id="name"
            label="Nome"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Seu nome"
            error={errors.name}
            disabled={isLoading}
          />

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

          <AuthInput
            id="password"
            label="Senha"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Mínimo de 6 caracteres"
            error={errors.password}
            disabled={isLoading}
          />

          <AuthInput
            id="confirmPassword"
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            placeholder="Digite sua senha novamente"
            error={errors.confirmPassword}
            disabled={isLoading}
          />

          <p className="register__terms">
            Ao criar uma conta, você concorda com os termos
            de utilização do aplicativo.
          </p>

          <Button
            type="submit"
            disabled={isLoading}
          >
            {isLoading
              ? "Criando conta..."
              : "Criar conta"}
          </Button>
        </form>

        <div className="auth-register">
          <span>
            Já possui uma conta?
          </span>

          <Link to="/login">
            Entrar
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
}

export default Register;