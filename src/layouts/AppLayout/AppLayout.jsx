import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-content">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default AppLayout;