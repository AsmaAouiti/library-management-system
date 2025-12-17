import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import DashboardUser from "../components/DashboardUser";
import DashboardAdmin from "../components/DashboardAdmin";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard-user"
        element={
          <PrivateRoute role="user">
            <DashboardUser />
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard-admin"
        element={
          <PrivateRoute role="admin">
            <DashboardAdmin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
