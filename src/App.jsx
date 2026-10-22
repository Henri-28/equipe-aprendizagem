import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Placeholder from "./pages/Placeholder/Placeholder";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

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
                
      </Routes>
    </BrowserRouter>
  );
}

export default App;