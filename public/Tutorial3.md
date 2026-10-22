
# Tutorial Nº 3 — Interface Principal da Aplicação e Navegação

## 1. O que este tutorial irá realizar

Neste tutorial será desenvolvida a **interface principal da aplicação**, ou seja, a área que o usuário visualizará depois de passar pela tela de autenticação.

A implementação será feita de maneira independente do Tutorial Nº 2, por meio de uma branch própria no GitHub.

Ao final deste tutorial, teremos:

- uma página principal funcional;
- uma estrutura visual preparada para receber as funcionalidades reais da aplicação;
- cabeçalho da aplicação;
- área de conteúdo principal;
- navegação inferior pensada para dispositivos móveis;
- componentes reutilizáveis;
- estados visuais para elementos ativos;
- responsividade;
- navegação entre as principais áreas da aplicação;
- integração da página principal com o React Router;
- organização de pastas adequada para continuar o desenvolvimento nas próximas Sprints;
- código separado da autenticação;
- branch própria no Git;
- commit;
- push para o GitHub;
- branch pronta para Pull Request.

### O que NÃO será implementado neste tutorial

É importante deixar isso explícito.

Este tutorial não irá implementar:

- banco de dados;
- API;
- login real;
- cadastro real;
- JWT;
- Firebase;
- Supabase;
- autenticação real;
- autorização;
- persistência de dados;
- regras de negócio definitivas;
- integração com backend;
- notificações reais;
- upload real de arquivos;
- qualquer funcionalidade que dependa de dados reais.

O objetivo desta Sprint é construir a **base visual e estrutural da interface**.

---

# 2. Melhorias realizadas em relação aos anexos

Antes de começar, estas são as alterações que serão feitas conscientemente.

Não quero que nenhuma mudança visual seja feita de maneira silenciosa.

## 2.1. A interface será mobile-first

Em vez de simplesmente reproduzir uma tela genérica gerada por IA, a implementação será pensada primeiro para uma tela pequena.

A ordem de preocupação será:

1. celular;
2. tablet;
3. desktop.

Isso é importante porque uma interface que funciona bem em 390 px normalmente pode ser expandida para telas maiores, enquanto o contrário costuma produzir interfaces apertadas no celular.

---

## 2.2. A interface não será uma cópia literal da IA do Figma

As telas produzidas por IA serão tratadas como **referência visual**, e não como código ou especificação definitiva.

Serão melhorados:

- espaçamentos;
- hierarquia visual;
- tamanhos dos textos;
- áreas clicáveis;
- organização dos componentes;
- responsividade;
- contraste;
- consistência dos botões;
- consistência dos ícones;
- navegação.

A intenção é transformar uma ideia visual em uma interface realmente implementável.

---

## 2.3. A navegação será pensada como produto real

Em vez de simplesmente colocar vários botões na tela, cada elemento de navegação terá uma função clara.

A estrutura será preparada para receber posteriormente as funcionalidades reais do sistema.

---

## 2.4. Componentes serão separados

Não será colocado todo o código em um único `Home.jsx`.

Componentes que possuem responsabilidade própria ficarão separados.

Por exemplo:

```text
src/
├── components/
│   ├── AppHeader/
│   ├── BottomNavigation/
│   └── ...
│
└── pages/
    └── Home/
```

Isso facilitará muito o trabalho das próximas Sprints.

---

## 2.5. A interface terá estados visuais

Elementos de navegação terão diferença visual entre:

- ativo;
- inativo;
- hover, quando aplicável;
- foco;
- desabilitado, quando necessário.

Isso evita aquela aparência de "protótipo de IA" em que todos os elementos parecem ter a mesma importância.

---

# 3. Pré-requisitos

Antes de iniciar, você precisa ter:

- Node.js instalado;
- Git instalado;
- VS Code instalado;
- acesso ao GitHub da equipe;
- acesso ao repositório do projeto;
- o projeto funcionando após o Tutorial Nº 1;
- as alterações do Tutorial Nº 2 já existentes no repositório, caso a equipe já tenha integrado aquela branch.

Você também precisa saber qual é a URL do repositório GitHub da equipe.

Ela terá aproximadamente este formato:

```text
https://github.com/USUARIO/REPOSITORIO.git
```

Não utilize literalmente esse endereço.

Use o endereço real do repositório da equipe.

---

# 4. Abrir o GitHub

## 4.1. Acesse o GitHub

Abra o navegador.

Digite:

```text
https://github.com
```

Entre na conta utilizada pela equipe.

---

## 4.2. Abra o repositório

Na página inicial do GitHub:

1. clique no seu avatar;
2. entre na organização ou perfil onde está o projeto;
3. localize o repositório da aplicação;
4. clique nele.

Você deverá estar na página principal do projeto.

---

# 5. Copiar a URL do repositório

Na página do repositório:

1. clique no botão **Code**;
2. selecione **HTTPS**;
3. copie a URL exibida.

Ela terá uma aparência semelhante a:

```text
https://github.com/usuario/projeto.git
```

Guarde essa URL.

---

# 6. Abrir o terminal

Agora vamos baixar o projeto.

No Windows, pressione:

```text
Windows + R
```

Digite:

```text
cmd
```

e pressione:

```text
Enter
```

Também é possível utilizar o terminal integrado do VS Code.

---

# 7. Escolher onde o projeto ficará

No terminal, vá até a pasta onde você costuma guardar seus projetos.

Por exemplo:

```bash
cd Desktop
```

ou:

```bash
cd Documents
```

Você pode verificar o conteúdo da pasta utilizando:

```bash
dir
```

---

# 8. Clonar o projeto

Digite:

```bash
git clone URL_DO_REPOSITORIO
```

Substitua `URL_DO_REPOSITORIO` pela URL copiada do GitHub.

Exemplo:

```bash
git clone https://github.com/usuario/projeto.git
```

Pressione:

```text
Enter
```

O Git fará o download do projeto.

---

# 9. Entrar na pasta

Depois do clone, aparecerá uma pasta com o nome do projeto.

Entre nela:

```bash
cd NOME_DO_PROJETO
```

Exemplo:

```bash
cd sistema-web
```

---

# 10. Conferir o Git

Execute:

```bash
git status
```

Você deverá visualizar informações semelhantes a:

```text
On branch main
nothing to commit, working tree clean
```

ou:

```text
On branch develop
nothing to commit, working tree clean
```

Isso significa que o projeto foi baixado corretamente.

---

# 11. Atualizar o projeto

Antes de começar a desenvolver, atualize a branch utilizada pela equipe.

Se a equipe utiliza `develop`:

```bash
git checkout develop
```

Depois:

```bash
git pull origin develop
```

Se a equipe estiver utilizando outra branch-base, utilize a branch definida pela equipe.

---

# 12. Instalar as dependências

Execute:

```bash
npm install
```

Aguarde terminar.

Se não aparecer nenhum erro grave, as dependências foram instaladas.

---

# 13. Executar o projeto antes de modificar

Agora execute:

```bash
npm run dev
```

O terminal deverá mostrar um endereço semelhante a:

```text
Local: http://localhost:5173/
```

Segure:

```text
Ctrl
```

e clique no endereço.

O navegador abrirá a aplicação.

---

# 14. Confirmar que o projeto está funcionando

Antes de criar qualquer código novo, verifique:

- a aplicação abre;
- não aparece uma tela completamente branca;
- o terminal não apresenta erro fatal;
- as funcionalidades anteriores continuam funcionando.

Se alguma coisa já estiver quebrada antes de você começar, **pare aqui**.

Não comece o Tutorial Nº 3 sobre uma base que já apresenta erro.

---

# 15. Parar o servidor

Volte para o terminal.

Pressione:

```text
Ctrl + C
```

O servidor será encerrado.

---

# 16. Criar a branch do Tutorial Nº 3

Agora vamos criar uma branch exclusiva para este tutorial.

Execute:

```bash
git checkout -b feature/tutorial-03-interface-principal
```

Depois confira:

```bash
git branch
```

Você deverá encontrar:

```text
* feature/tutorial-03-interface-principal
```

O `*` indica a branch atualmente utilizada.

---

# 17. Abrir o projeto no VS Code

No terminal, estando dentro da pasta do projeto, execute:

```bash
code .
```

O VS Code deverá abrir o projeto.

Caso o comando `code .` não funcione:

1. abra o VS Code manualmente;
2. clique em **File**;
3. clique em **Open Folder...**;
4. selecione a pasta do projeto;
5. clique em **Select Folder**.

---

# 18. Conferir a estrutura existente

No painel esquerdo do VS Code, abra:

```text
src
```

Você provavelmente terá uma estrutura semelhante a:

```text
src/
├── assets/
├── components/
├── pages/
├── App.jsx
├── main.jsx
└── ...
```

**Não apague arquivos existentes simplesmente porque seus nomes são diferentes dos exemplos deste tutorial.**

O projeto já possui código dos tutoriais anteriores.

---

# 19. Estrutura que vamos criar

Dentro de `src`, criaremos ou utilizaremos a seguinte estrutura:

```text
src/
├── components/
│   ├── AppHeader/
│   │   ├── AppHeader.jsx
│   │   └── AppHeader.css
│   │
│   └── BottomNavigation/
│       ├── BottomNavigation.jsx
│       └── BottomNavigation.css
│
├── pages/
│   └── Home/
│       ├── Home.jsx
│       └── Home.css
│
└── App.jsx
```

Essa organização separa:

- componentes reutilizáveis;
- páginas;
- estilos específicos.

---

# 20. Criar a pasta AppHeader

No VS Code:

1. localize `src`;
2. clique com o botão direito em `components`;
3. selecione **New Folder**;
4. digite:

```text
AppHeader
```

Pressione Enter.

Agora teremos:

```text
src/components/AppHeader
```

---

# 21. Criar AppHeader.jsx

Clique com o botão direito na pasta:

```text
AppHeader
```

Selecione:

```text
New File
```

Digite:

```text
AppHeader.jsx
```

Abra o arquivo.

Cole:

```jsx
import { Link } from "react-router-dom";
import "./AppHeader.css";

function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <Link to="/" className="app-header__brand">
          <span className="app-header__brand-mark">A</span>

          <span className="app-header__brand-name">
            Aplicação
          </span>
        </Link>

        <button
          type="button"
          className="app-header__profile"
          aria-label="Abrir perfil"
        >
          <span className="app-header__profile-avatar">
            U
          </span>
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
```

---

# 22. Criar AppHeader.css

Na mesma pasta:

```text
src/components/AppHeader/
```

crie:

```text
AppHeader.css
```

Cole:

```css
.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.app-header__content {
  width: min(100%, 1120px);
  min-height: 64px;
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  color: #202020;
  text-decoration: none;
}

.app-header__brand-mark {
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  border-radius: 10px;

  background: #b91c1c;
  color: #ffffff;

  font-size: 16px;
  font-weight: 700;
}

.app-header__brand-name {
  font-size: 17px;
  font-weight: 700;
}

.app-header__profile {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

.app-header__profile-avatar {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #eeeeee;
  color: #333333;

  font-size: 14px;
  font-weight: 700;
}

.app-header__profile:focus-visible {
  outline: 3px solid rgba(185, 28, 28, 0.25);
  outline-offset: 3px;
}

@media (min-width: 768px) {
  .app-header__content {
    padding: 0 24px;
  }

  .app-header__brand-name {
    font-size: 18px;
  }
}
```

---

# 23. Criar BottomNavigation

Dentro de:

```text
src/components
```

crie a pasta:

```text
BottomNavigation
```

Dentro dela crie:

```text
BottomNavigation.jsx
```

e:

```text
BottomNavigation.css
```

---

# 24. Código do BottomNavigation.jsx

Abra:

```text
src/components/BottomNavigation/BottomNavigation.jsx
```

Cole:

```jsx
import { NavLink } from "react-router-dom";
import "./BottomNavigation.css";

function BottomNavigation() {
  return (
    <nav className="bottom-navigation" aria-label="Navegação principal">
      <div className="bottom-navigation__content">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">⌂</span>
          <span className="bottom-navigation__label">Início</span>
        </NavLink>

        <NavLink
          to="/explorar"
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">⌕</span>
          <span className="bottom-navigation__label">Explorar</span>
        </NavLink>

        <NavLink
          to="/atividade"
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">♡</span>
          <span className="bottom-navigation__label">Atividade</span>
        </NavLink>

        <NavLink
          to="/perfil"
          className={({ isActive }) =>
            `bottom-navigation__item ${
              isActive ? "bottom-navigation__item--active" : ""
            }`
          }
        >
          <span className="bottom-navigation__icon">○</span>
          <span className="bottom-navigation__label">Perfil</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default BottomNavigation;
```

---

# 25. Código do BottomNavigation.css

Abra:

```text
src/components/BottomNavigation/BottomNavigation.css
```

Cole:

```css
.bottom-navigation {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 30;

  background: #ffffff;
  border-top: 1px solid #e5e5e5;
}

.bottom-navigation__content {
  width: min(100%, 600px);
  min-height: 64px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.bottom-navigation__item {
  min-height: 64px;
  padding: 8px 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  color: #777777;
  text-decoration: none;

  font-size: 11px;
  font-weight: 600;
}

.bottom-navigation__icon {
  font-size: 21px;
  line-height: 1;
}

.bottom-navigation__label {
  line-height: 1;
}

.bottom-navigation__item--active {
  color: #b91c1c;
}

.bottom-navigation__item:focus-visible {
  outline: 3px solid rgba(185, 28, 28, 0.25);
  outline-offset: -3px;
}

@media (min-width: 768px) {
  .bottom-navigation {
    position: static;
    border-top: 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .bottom-navigation__content {
    max-width: 700px;
  }

  .bottom-navigation__item {
    min-height: 52px;
    flex-direction: row;
    gap: 8px;
    font-size: 13px;
  }

  .bottom-navigation__icon {
    font-size: 19px;
  }
}
```

---

# 26. Criar a página Home

Agora vamos criar:

```text
src/pages/Home
```

Se `pages` ainda não existir:

1. clique com o botão direito em `src`;
2. selecione **New Folder**;
3. digite:

```text
pages
```

Depois crie dentro dela:

```text
Home
```

Dentro de `Home`, crie:

```text
Home.jsx
```

e:

```text
Home.css
```

---

# 27. Código da Home.jsx

Abra:

```text
src/pages/Home/Home.jsx
```

Cole:

```jsx
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
```

---

# 28. Código da Home.css

Abra:

```text
src/pages/Home/Home.css
```

Cole:

```css
.home-page {
  min-height: 100vh;
  background: #f7f7f7;
  color: #202020;
  padding-bottom: 76px;
}

.home-page__main {
  width: min(100%, 1120px);
  margin: 0 auto;
  padding: 28px 16px 32px;
}

.home-page__intro {
  max-width: 720px;
  margin-bottom: 32px;
}

.home-page__eyebrow,
.home-page__section-eyebrow,
.home-page__highlight-label {
  display: block;

  margin-bottom: 8px;

  color: #b91c1c;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-page__title {
  margin: 0;

  color: #171717;

  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.home-page__description {
  max-width: 620px;
  margin: 14px 0 0;

  color: #666666;

  font-size: 15px;
  line-height: 1.6;
}

.home-page__section {
  margin-bottom: 24px;
}

.home-page__section-heading {
  margin-bottom: 14px;
}

.home-page__section-title {
  margin: 0;

  color: #222222;

  font-size: 21px;
  line-height: 1.2;
}

.home-page__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.home-card {
  min-height: 128px;
  padding: 18px;

  display: flex;
  align-items: flex-start;
  gap: 14px;

  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.home-card__icon {
  flex: 0 0 42px;

  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border-radius: 12px;

  background: #fbeaea;
  color: #b91c1c;

  font-size: 20px;
  font-weight: 700;
}

.home-card__content h3 {
  margin: 0 0 6px;

  font-size: 16px;
}

.home-card__content p {
  margin: 0;

  color: #707070;

  font-size: 13px;
  line-height: 1.5;
}

.home-page__highlight {
  padding: 22px;

  background: #202020;
  border-radius: 18px;

  color: #ffffff;
}

.home-page__highlight-label {
  margin-bottom: 10px;
  color: #fca5a5;
}

.home-page__highlight h2 {
  margin: 0;

  font-size: 21px;
  line-height: 1.25;
}

.home-page__highlight p {
  margin: 12px 0 0;

  color: #d0d0d0;

  font-size: 14px;
  line-height: 1.55;
}

@media (min-width: 600px) {
  .home-page__main {
    padding: 36px 24px 40px;
  }

  .home-page__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .home-page {
    padding-bottom: 0;
  }

  .home-page__main {
    padding: 48px 32px 64px;
  }

  .home-page__title {
    font-size: 42px;
  }

  .home-page__description {
    font-size: 16px;
  }

  .home-page__cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .home-card {
    min-height: 160px;
  }
}
```

---

# 29. Configurar as rotas

Agora precisamos integrar a nova página ao React Router.

Abra:

```text
src/App.jsx
```

**Atenção:** como o projeto já possui código desenvolvido anteriormente, não apague automaticamente tudo que estiver nesse arquivo.

A ideia é garantir que exista uma rota para:

```text
/
```

apontando para `Home`.

Caso seu `App.jsx` já tenha as rotas de autenticação do Tutorial Nº 2, mantenha-as.

Uma estrutura possível será:

```jsx
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Se os nomes das páginas de autenticação do seu projeto forem diferentes, **não renomeie arquivos só para coincidir com este exemplo**.

Utilize os nomes que realmente existem no seu projeto.

---

# 30. Criar rotas temporárias para a navegação

Neste momento, os quatro itens do menu apontam para:

```text
/
/explorar
/atividade
/perfil
```

Ainda não temos páginas reais para as três últimas rotas.

Para evitar páginas inexistentes, vamos criar uma página temporária reutilizável.

Crie:

```text
src/pages/Placeholder/
```

Dentro dela:

```text
Placeholder.jsx
```

e:

```text
Placeholder.css
```

---

# 31. Código do Placeholder.jsx

Cole:

```jsx
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
```

---

# 32. Código do Placeholder.css

Cole:

```css
.placeholder-page {
  min-height: 100vh;
  padding-bottom: 76px;

  background: #f7f7f7;
  color: #202020;
}

.placeholder-page__main {
  width: min(100%, 800px);
  margin: 0 auto;
  padding: 48px 16px;
}

.placeholder-page__eyebrow {
  display: block;
  margin-bottom: 8px;

  color: #b91c1c;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.placeholder-page h1 {
  margin: 0;

  font-size: 32px;
  line-height: 1.15;
}

.placeholder-page p {
  max-width: 600px;
  margin-top: 14px;

  color: #666666;

  line-height: 1.6;
}

@media (min-width: 900px) {
  .placeholder-page {
    padding-bottom: 0;
  }

  .placeholder-page__main {
    padding: 64px 32px;
  }
}
```

---

# 33. Adicionar as rotas temporárias

No `App.jsx`, adicione:

```jsx
import Placeholder from "./pages/Placeholder/Placeholder";
```

E dentro de `<Routes>`:

```jsx
<Route
  path="/explorar"
  element={<Placeholder title="Explorar" />}
/>

<Route
  path="/atividade"
  element={<Placeholder title="Atividade" />}
/>

<Route
  path="/perfil"
  element={<Placeholder title="Perfil" />}
/>
```

Assim, a navegação já funcionará mesmo antes de essas telas serem desenvolvidas definitivamente.

---

# 34. Rodar o projeto

Salve todos os arquivos.

No terminal:

```bash
npm run dev
```

Abra:

```text
http://localhost:5173
```

---

# 35. Testar a página inicial

Você deverá visualizar:

- cabeçalho;
- marca da aplicação;
- avatar;
- título principal;
- descrição;
- cards;
- seção de destaque;
- navegação inferior.

No celular, a navegação deverá ficar na parte inferior.

No desktop, ela deverá se adaptar para uma posição mais adequada ao espaço disponível.

---

# 36. Testar os links

Clique em:

```text
Início
```

Deve abrir:

```text
/
```

Clique em:

```text
Explorar
```

Deve abrir:

```text
/explorar
```

Clique em:

```text
Atividade
```

Deve abrir:

```text
/atividade
```

Clique em:

```text
Perfil
```

Deve abrir:

```text
/perfil
```

Em cada página, a opção correspondente deverá aparecer como ativa.

---

# 37. Teste em celular

No Chrome:

1. pressione:

```text
F12
```

2. clique no ícone de dispositivos móveis;
3. selecione uma dimensão semelhante a:

```text
390 × 844
```

Observe a interface.

Depois teste:

```text
375 × 667
```

e:

```text
430 × 932
```

O conteúdo não deverá:

- ultrapassar a largura;
- criar rolagem horizontal;
- ficar escondido atrás da navegação;
- apresentar textos cortados.

---

# 38. Teste em tablet

Teste aproximadamente:

```text
768 × 1024
```

Observe se os cards passam a utilizar mais espaço horizontal.

---

# 39. Teste em desktop

Teste aproximadamente:

```text
1440 × 900
```

A página deverá permanecer centralizada.

O conteúdo não deverá ficar exageradamente largo.

---

# 40. Testar o teclado

Agora faça um teste de acessibilidade simples.

Pressione:

```text
Tab
```

várias vezes.

Verifique se os elementos interativos podem receber foco.

Os elementos devem apresentar indicação visual de foco.

---

# 41. Verificar o console

No navegador:

1. pressione `F12`;
2. clique em **Console**.

Verifique se existem erros vermelhos.

Erros como:

```text
Failed to resolve import
```

ou:

```text
Module not found
```

precisam ser corrigidos antes do commit.

---

# 42. Verificar o terminal

Volte ao terminal.

Se o Vite estiver executando normalmente e não houver erros, pressione:

```text
Ctrl + C
```

---

# 43. Verificar os arquivos modificados

Execute:

```bash
git status
```

Você deverá encontrar os arquivos criados/modificados.

Algo semelhante a:

```text
src/components/AppHeader/AppHeader.jsx
src/components/AppHeader/AppHeader.css
src/components/BottomNavigation/BottomNavigation.jsx
src/components/BottomNavigation/BottomNavigation.css
src/pages/Home/Home.jsx
src/pages/Home/Home.css
src/pages/Placeholder/Placeholder.jsx
src/pages/Placeholder/Placeholder.css
src/App.jsx
```

---

# 44. Verificar o diff

Antes do commit, execute:

```bash
git diff
```

Leia as alterações.

Esse passo é importante.

Não faça commit sem saber o que foi modificado.

---

# 45. Adicionar os arquivos

Execute:

```bash
git add .
```

Depois:

```bash
git status
```

Os arquivos deverão aparecer como preparados para commit.

---

# 46. Criar o commit

Utilize uma mensagem objetiva:

```bash
git commit -m "feat: adiciona interface principal da aplicacao"
```

Pressione Enter.

O Git deverá informar que o commit foi criado.

---

# 47. Conferir o commit

Execute:

```bash
git log -1 --oneline
```

Você deverá visualizar o commit recém-criado.

---

# 48. Enviar a branch para o GitHub

Agora execute:

```bash
git push -u origin feature/tutorial-03-interface-principal
```

Aguarde terminar.

Se tudo funcionar, sua branch estará disponível no GitHub.

---

# 49. Abrir o GitHub

Volte ao navegador.

Abra o repositório da equipe.

O GitHub provavelmente exibirá uma mensagem semelhante a:

```text
Compare & pull request
```

Clique nela.

---

# 50. Criar o Pull Request

Na criação do Pull Request:

### Base

Utilize:

```text
develop
```

caso `develop` seja a branch oficial de integração da equipe.

### Compare

Selecione:

```text
feature/tutorial-03-interface-principal
```

---

# 51. Título do Pull Request

Utilize:

```text
feat: adiciona interface principal da aplicacao
```

---

# 52. Descrição do Pull Request

Utilize uma descrição semelhante a:

```text
## O que foi desenvolvido

- criação da interface principal;
- criação do cabeçalho da aplicação;
- criação da navegação inferior;
- criação dos cards da área principal;
- criação de estrutura responsiva;
- criação de rotas temporárias;
- integração com React Router.

## Escopo

Este PR contém apenas a camada de interface e navegação.

Não foram implementados:

- backend;
- banco de dados;
- API;
- autenticação real;
- persistência de dados;
- regras de negócio definitivas.

## Testes realizados

- teste em celular;
- teste em tablet;
- teste em desktop;
- teste de navegação;
- teste de foco pelo teclado;
- verificação do console;
- verificação do Git diff.
```

---

# 53. Não faça merge sozinho

Depois de abrir o Pull Request:

**não faça o merge simplesmente porque o GitHub permite.**

A equipe deve seguir o fluxo definido para o projeto.

O ideal é outro integrante revisar o código.

Se houver revisão:

1. leia os comentários;
2. faça as alterações solicitadas;
3. execute novamente os testes;
4. faça novo commit;
5. envie novamente para a mesma branch.

O Pull Request será atualizado automaticamente.

---

# 54. Checklist final

Antes de considerar o Tutorial Nº 3 concluído, confira:

### Git

- [ ] repositório clonado;
- [ ] projeto atualizado;
- [ ] branch correta criada;
- [ ] alterações feitas somente na branch do tutorial;
- [ ] commit criado;
- [ ] push realizado;
- [ ] Pull Request aberto.

### React

- [ ] aplicação inicia com `npm run dev`;
- [ ] página principal funciona;
- [ ] componentes foram separados;
- [ ] rotas funcionam;
- [ ] não existem imports quebrados;
- [ ] não existem erros no console.

### Interface

- [ ] cabeçalho funcionando;
- [ ] navegação funcionando;
- [ ] item ativo identificado;
- [ ] cards apresentados;
- [ ] interface responsiva;
- [ ] celular testado;
- [ ] tablet testado;
- [ ] desktop testado;
- [ ] foco pelo teclado testado.

---

# 55. Resultado esperado ao final do Tutorial Nº 3

Ao terminar, a aplicação terá uma estrutura semelhante a:

```text
Aplicação
│
├── Autenticação
│   ├── Login
│   ├── Cadastro
│   └── Recuperação de senha
│
└── Área principal
    ├── Início
    ├── Explorar
    ├── Atividade
    └── Perfil
```

E no código:

```text
src/
│
├── components/
│   ├── AppHeader/
│   │   ├── AppHeader.jsx
│   │   └── AppHeader.css
│   │
│   └── BottomNavigation/
│       ├── BottomNavigation.jsx
│       └── BottomNavigation.css
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   │
│   ├── Placeholder/
│   │   ├── Placeholder.jsx
│   │   └── Placeholder.css
│   │
│   └── ...
│
└── App.jsx
```

Essa estrutura é deliberadamente preparada para que, nas próximas Sprints, as telas provisórias sejam substituídas pelas telas e funcionalidades definitivas.

---

# 56. O que este tutorial entrega para a próxima Sprint

O principal objetivo deste Tutorial Nº 3 não é simplesmente "fazer uma tela bonita".

Ele estabelece uma **base estrutural para a aplicação**.

Nas próximas etapas, a equipe poderá substituir:

```text
Placeholder
```

por páginas reais, substituir os dados fictícios por dados reais e conectar os componentes ao backend sem precisar reconstruir toda a estrutura visual.

Também será possível evoluir:

```text
Home
```

para a verdadeira tela principal especificada pelo projeto.

Da mesma forma:

```text
Explorar
Atividade
Perfil
```

podem posteriormente receber suas respectivas funcionalidades.

---

# 57. Regra importante para a continuidade do projeto

Não transforme este tutorial em uma implementação antecipada das próximas Sprints.

Se uma funcionalidade exigir:

- banco;
- API;
- autenticação;
- backend;
- persistência;
- regra de negócio;

deixe a estrutura preparada e documentada, mas não implemente tudo agora.

Isso mantém a Sprint 1 organizada e evita que três integrantes da equipe alterem as mesmas partes do sistema simultaneamente.

**Tutorial Nº 3 = interface principal + navegação + estrutura visual + responsividade.**

**Próximas Sprints = funcionalidades reais e integração com dados.**

# 58. Comando final de conferência

Depois de tudo pronto, execute:

```bash
git status
```

O resultado esperado, depois do commit e push, é algo semelhante a:

```text
On branch feature/tutorial-03-interface-principal
nothing to commit, working tree clean
```

Isso significa que suas alterações foram commitadas.

E confirme no GitHub que existe a branch:

```text
feature/tutorial-03-interface-principal
```

e que ela contém o commit:

```text
feat: adiciona interface principal da aplicacao
```

Com isso, a sua parte do Tutorial Nº 3 estará concluída e pronta para revisão da equipe.