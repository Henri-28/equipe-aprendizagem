import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AppLayout from "../layouts/AppLayout/AppLayout";

import Splash from "../pages/Splash/Splash";
import Onboarding from "../pages/Onboarding/Onboarding";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Setup from "../pages/Setup/Setup";
import Diagnosis from "../pages/Diagnosis/Diagnosis";
import Home from "../pages/Home/Home";
import Planning from "../pages/Planning/Planning";
import Study from "../pages/Study/Study";
import Progress from "../pages/Progress/Progress";
import Profile from "../pages/Profile/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/splash" element={<Splash />} />

        <Route
          path="/onboarding"
          element={<Onboarding />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route path="/setup" element={<Setup />} />

        <Route
          path="/diagnosis"
          element={<Diagnosis />}
        />

        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;