import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../utils/logout";

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // get current path
  const isLoggedIn = !!localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <header className="header">
      <div className="logo">Library Management System</div>
      <div className="nav-links">
        <Link to="/">Home</Link>

        {!isLoggedIn && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {isLoggedIn && (
          <>
            {/* Show admin dashboard link only if not on admin dashboard */}
            {role === "admin" && location.pathname !== "/dashboard-admin" && (
              <Link to="/dashboard-admin">Admin Dashboard</Link>
            )}

            {/* Show user dashboard link only if not on user dashboard */}
            {role === "user" && location.pathname !== "/dashboard-user" && (
              <Link to="/dashboard-user">User Dashboard</Link>
            )}

            <button
              onClick={() => logout(navigate)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#d8c3a5",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 500, 
              }}
              className="logout-btn"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
