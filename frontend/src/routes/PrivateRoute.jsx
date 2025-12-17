import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role")?.toLowerCase();

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ❌ Role required but doesn't match
  if (role && userRole !== role.toLowerCase()) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Allowed
  return children;
};

export default PrivateRoute;
